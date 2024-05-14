import React, {useState,useEffect} from 'react';
import styles from '../styles/Popular.module.css';
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import Link from 'next/link'
import Hotel from '../pages/hotel';
export default function Popular(props)
{
    const name=props.name;
    const [items, setItems] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            if (!name) return;
            const clt = collection(db,"hotels");
            const snap = await getDocs(clt);
            const itemsData = snap.docs.map((doc) => doc.id);
            setItems(itemsData);
            console.log(items);
          } catch (error) {
            console.log(name);
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [name]);
    return (
        <>
        <div className={styles.container}>
            <div id={styles.smcont}>
                <h1>Popular Caterers</h1>
                <Link href={{pathname:'/allhotel',query:{name:name}}}><button>View All</button></Link>
            </div>
            <div id={styles.pop}>
                {items.map((k,ind)=>(
                  ind<4 && 
                    <>
                    <Link href={{pathname:'/hotel',query:{name:name,hot_name:k}}} style={{color:'black',textDecoration:'none'}} key={ind}>
                <div style={{textAlign:'center'}}>{k}</div>
            </Link>
                    </>
                ))}
            </div>
        </div>
        </>
    )
}