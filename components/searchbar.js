import React from 'react';
import styles from '../styles/Search.module.css';
export default function Search ()
{
    return(
        <>
        <div className={styles.container}>
            <p>There is something you want <span style={{color:'#F3B802',marginRight:12}}>Catering</span>for your events</p>
            <div><input type='text' placeholder='Search Your thing'/><button>Submit</button></div>
        </div>
        </>
    )
}