'use client'
import React ,{useState} from "react";
import styles from '../styles/Reviews.module.css';
export default function Reviews()
{
    const user=['Shameel','Vasanth','Yukesh'];
    const reviews=['Good and Clean','Bad','Awesome']
    const [count,setcount]=useState(0)
    return (
        <>
        <div className={styles.cont}>
            <h1>Reviews</h1>
            <div id={styles.smallcont}>
                <button onClick={()=>setcount(count-1)}>-</button>
                <div>
                    {count<0 || count==3 ? setcount(0) : (<>
                    <h2>{user[count]}</h2>
                    <p>{reviews[count]}</p> </> )
                        }
                </div>
                <button onClick={()=>setcount(count+1)}>+</button>
            </div>
        </div>
        </>
    )
}
