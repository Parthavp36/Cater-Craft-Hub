import React, { useState } from "react";
import styles from "../styles/Add.module.css";
import { FaPlus } from "react-icons/fa6";
import { db } from "./firebase";
import { doc,collection, getDoc, getDocs,setDoc } from "firebase/firestore";
export default function Add(props)
{
    const name= props.name;
    const [arr,setarr]=useState([]);
    const [ids,setids]=useState([]);
    const [count,setcount]=useState(1);
    const [htname,sethtname]=useState('');
    // const [items,setItems]=useState()
    const [count1,setcount1]=useState(1);
    const [inp,setinp]=useState(Array(count).fill(''));
    const [qty,setqty]=useState(Array(count).fill(''));
    const [des,setdes]=useState(Array(count).fill(''));
    const handle = (ind,event) =>
    {
        const a = [...inp];
        a[ind]=event.target.value;
        setinp(a);
    }
    const handleqty = (ind,event)=>
    {
        const b = [...qty];
        b[ind]=event.target.value;
        setqty(b);
        // console.log(qty);
    }
    const handleadd = (ind,event)=>
    {
        const c = [...qty];
        c[ind]=event.target.value;
        setdes(c);
        // console.log(qty);
    }
    const handledata = async() =>
    {
        try {
            const cl = collection(db,"hotels");
            const snp=await getDocs(cl);
            const temp=snp.docs.map((doc)=>(doc.data()));
            const tmp=snp.docs.map((doc)=>doc.id);
            setarr(temp);
            setids(tmp);
            console.log(tmp);
            for(let i=0;i<arr.length;i++)
            {
                if(arr[i].owner === name)
                {
                    for(let j=0;j<inp.length;j++){
                    // console.log(arr[i].owner);
                    const sam=ids[i];
                    const clt=collection(db,"hotels",sam,"items");
                    await setDoc(doc(clt,inp[j]),{
                    name : inp[j],
                    price : qty[j],
                    Description : des[j],
                    }) }
                    
                }
            }
          //  console.log(htname);
            
          } catch (error) {
            console.log(name);
            console.error('Error fetching data:', error);
          }
        console.log(inp)
    };
    return(
        <>
        <div className={styles.cont}>
            <div className={styles.smcont}>
                <div>
                    <p style={{marginLeft:20}}>Add items</p>
                    <section className={styles.sec}>
                        <button style={{marginLeft:20}} onClick={()=>setcount(count+1)}><FaPlus className={styles.icon}/>Add Field</button>
                        <button style={{marginRight:20,backgroundColor:'#F3B802',color:'white'}} onClick={()=>handledata()}>Insert</button>
                    </section>
                    <table>
                        <thead>
                            <tr style={{backgroundColor:'#F3B802',color:'white'}}>
                                <td className={styles.tb}>s.no</td>
                                <td className={styles.tb}>Item Name</td>
                                <td className={styles.tb}>Price</td>
                                <td className={styles.tb}>Description</td>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({length:count},(_,index)=>(
                                <>
                                <tr key={index}>
                                    <td className={styles.tb}>{index+1}</td>
                                    <td className={styles.tb}><input type="text"  onChange={(e)=>handle(index,e)}/></td>
                                    <td className={styles.tb}><input type="number" onChange={(e)=>handleqty(index,e)}/></td>
                                    <td className={styles.tb}><input type="text" onChange={(e)=>handleadd(index,e)}/></td>

                                </tr>
                                </>
                            ))}
                        </tbody>
                    </table>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%'}}>
                    {/* <p style={{fontSize:25}}>or</p> */}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}