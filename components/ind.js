import React, { useState, useEffect } from "react";
import { db,app,firebaseConfig} from "./firebase";
import firebase from "firebase/compat/app"; // Import firebase to access app()
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { collection, getDocs, doc, setDoc, query ,where} from "firebase/firestore";
import styles from "../styles/Ind.module.css";
import { FaStar, FaRupeeSign } from "react-icons/fa";
import Images from "next/image";
import { RxCross2 } from "react-icons/rx";
import { initializeApp } from "firebase/app";
const storage = getStorage(app);
export default function Ind(props) {
    const name=props.name;
    const hotel=props.hotel;
    const [stat, setStat] = useState(false);
    const [items, setItems] = useState([]);
    const [imageUrl, setImageUrl] = useState("");
  
    const syncc = async () => {
      try {
        await setDoc(doc(db, name, hotel), {
          name: `${hotel}`,
          contact: "9234229584",
        });
    
        const clt = collection(db, "users");
        const snap = await getDocs(clt);
        const itemsData = snap.docs.map((doc) => doc.data());
    
        // Find the user in itemsData
        const user = itemsData.find((item) => item.name === name);
    
        if (user) {
          await setDoc(doc(db, "hotels", hotel, "orders", name), {
            name: name,
            contact: user.contact, // Use the contact from the user found in users collection
          });
        } else {
          console.log("User not found in users collection");
        }
      } catch (error) {
        console.error("Error syncing:", error);
      }
    };
  
    useEffect(() => {
      const fetchData = async () => {
        const clt = collection(db, `/hotels/${hotel}/items`);
        const snap = await getDocs(clt);
        const itemsData = snap.docs.map((doc) => doc.data());
        setItems(itemsData);
      };
  
      fetchData();
    }, []);
  
    useEffect(() => {
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
      const fetchImage = async () => {
        try {
          const storage = getStorage(app);
          const fileRef = ref(storage, "gs://nifty-yeti-387411.appspot.com/ashiq_catering/bun.jpg");
          const url = await getDownloadURL(fileRef);
          setImageUrl(url);
        } catch (error) {
          console.error("Error fetching image:", error);
        }
      };
      console.log(hotel);
      fetchImage();
    }, []);
    return (
      <div className={styles.cont}>
        <div id={styles.imgg} style={{backgroundColor:'black',color:'white'}}>
          <div
            className={styles.head}>
            <h1>{hotel}</h1>
            <p>
              Thiruvottriyur , Chennai{" "}
              <FaStar className={styles.icon} style={{ marginLeft: 30 }} />
              <FaStar className={styles.icon} />
              <FaStar className={styles.icon} />
              <FaStar className={styles.icon} />
            </p>
            <p>Min Order: 150</p>
            <p>Acceptance Time: 1 day</p>
            {/* <p>Cost of delivery: 0</p> */}
          </div>
          <section className={styles.s}>
            <button onClick={() => (setStat(true), syncc())}>
              Hire This Caterer
            </button>
          </section>
        </div>
        {items.map((item, ind) => (
          <div className={styles.items} key={ind}>
            {/* <Images src="/images/cake1.jpg" height={150} width={200} /> */}
            <div style={{ marginLeft: 30 ,width:'100%'}}>
              <div>
                <p style={{ fontSize: 20 }}>{item.name}</p>
                <span style={{ fontSize: 18 }}>
                  <FaRupeeSign />
                  {item.price}
                </span>
                <p style={{ color: "gray", lineHeight: 1.5, width: "70%" }}>
                  {item.Description}
                </p>
              </div>
            </div>
          </div>
        ))}
        {stat && (
          <div className={styles.pop}>
            <div>
              <RxCross2
                style={{ height: 30, width: 30 }}
                onClick={() => setStat(false)}
              />
            </div>
            <Images src="/images/right.png" height={50} width={50} />
            <p style={{ textAlign: "center" }}>
              Your Request has been submitted to the Caterer.
            </p>
            <button>Check Status</button>
          </div>
        )}
      </div>
    );
  }
  

// import React, {useState,useEffect} from "react";
// import { db } from "./firebase";
// import { firebaseConfig} from "./firebase";
// import { getStorage, ref, getDownloadURL } from 'firebase/storage';
// import firebase from 'firebase/compat/app'; // Import firebase to access app()
// import 'firebase/compat/storage';
// import { doc, setDoc } from "firebase/firestore"; 
// import styles from '../styles/Ind.module.css'
// import { FaLastfmSquare, FaSlack, FaStar } from "react-icons/fa";
// import {collection, getDocs} from 'firebase/firestore';
// import Images from 'next/image'
// import { RxCross2 } from "react-icons/rx";
// import { FaRupeeSign } from "react-icons/fa";
// export default function Ind()
// {
//     const [count,setcount]=useState(0);
//     const [stat,setstat]=useState(false);
//     const [pop,setpop]=useState({});
//     const [items,setitems]=useState([]);
//     const [imageUrl, setImageUrl] = useState("");    
//     const syncc = async ()=>
//     {
//         await setDoc(doc(db, "Shameel@gmail.com", "orders"), {
//             name: "Ashiq caterers",
//             contact: "9234229584",
//           });
//     }
//     useEffect(() => {
//         const fetchData = async () => {
//             const clt = collection(db, "/hotels/Ashiq Catering/items");
//             console.log("welcoem");
//             const snap = await getDocs(clt);
//             const itemsData = snap.docs.map(doc => doc.data());
//             setitems(itemsData);
//         };

//         fetchData();
//     }, []);
//     useEffect(() => {
//         if (!firebase.apps.length) {
//             firebase.initializeApp(firebaseConfig);
//           }
//         const fetchImage = async () => {
//           try {
            
//             const storage = getStorage(firebaseConfig);
//             const fileRef = ref(storage, "images/bun.jpeg"); // Use imagePath from props
//             const url = await getDownloadURL(fileRef);
//             setImageUrl(url);
//           } catch (error) {
//             console.error("Error fetching image:", error);
//           }
//         };
    
//         fetchImage();
//       }, []);
//     return(
//         <div className={styles.cont}>
//             <div id={styles.imgg}>
//                 <div className={styles.head} style={{backgroundImage:`url(${imageUrl})`}}>
//                 <h1>Asiq catrer</h1>
//                 <p>Thiruvottriyur , Chennai <FaStar className={styles.icon} style={{marginLeft:30}}/><FaStar className={styles.icon}/><FaStar className={styles.icon}/><FaStar className={styles.icon}/></p>
//                     <p>Min Order: 150</p><p>Acceptance Time: 1 day</p><p>Cost of delivery: 0</p>
//                 </div>
//                 <section className={styles.s}>
//                 <button onClick={()=>(setstat(true),syncc())}>Hire This Caterer</button>
//                 </section>
//             </div>
//             {items.map((item, ind) => (
//                 <div className={styles.items}>
//                     <Images src='/images/cake1.jpg' height={150} width={200} style={{marginLeft:50}}/>
//                     <div style={{marginLeft:30}}>
//                         <div key={ind}>
//                             <p style={{fontSize:20}}>{item.name}</p>
//                             <span style={{fontSize:18}}><FaRupeeSign/>{item.price}</span>
//                             <p style={{color:'gray',lineHeight:1.5,width:'70%'}}>{item.Description}</p>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//             {stat && 
//             <div className={styles.pop}>
//                 <div><RxCross2 style={{height:30,width:30}} onClick={()=>setstat(false)}/></div>
//                 <Images src="/images/right.png" height={50} width={50}/>
//                 <p style={{textAlign:'center'}}>Your Request has been submitted to the Caterer.</p>
//                 <button>Check Status</button>
//             </div>}
//         </div>
//     )
// }