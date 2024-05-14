// Use 'client' import if needed
import React, { useState, useEffect } from "react";
import styles from '../styles/All.module.css';
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import Link from "next/link";

export default function All(props) {
    const [items, setItems] = useState([]);
    const name = props.name;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const clt = collection(db, "hotels");
                const snap = await getDocs(clt);
                const itemsData = snap.docs.map((doc) => doc.id);
                setItems(itemsData);
                console.log(itemsData); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <main className={styles.cont}>
                <section className={styles.smcont}>
                    {items.map((itm, index) => (
                        <Link href={{pathname:'/hotel',query:{name:name,hot_name:itm}}}>
                            <div key={index}>
                                <p>{itm}</p>
                            </div>
                        </Link>
                    ))}
                </section>
            </main>
        </>
    );
}
