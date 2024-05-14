'use client';
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import styles from '../styles/Banner.module.css';
import Image from 'next/image';

export default function Banner(props) {
  const name = props.name;
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!name) return;

        const clt = collection(db,name);
        const snap = await getDocs(clt);
        const itemsData = snap.docs.map((doc) => doc.data());
        setItems(itemsData);
      } catch (error) {
        console.log(name);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [name]);

  return (
    <div className={styles.over}>
      <div className={styles.sec}>
        <div className={styles.cont}>
          <div>
            <Image src="/images/icon.jpg" height={150} width={150} style={{ borderRadius: '100%' }} />
            <div id={styles.st}>
              <p>{name}</p>
              <p>+91 9952912846</p>
            </div>
          </div>
          <button>Edit Profile</button>
        </div>
        <h2 id={styles.sim}>My Orders</h2>
        {items.map((item, index) => (
          <div className={styles.hot} key={index}>
            <div>
              <h2>{item.name}</h2>
              <p>{item.contact}</p>
            </div>
            <button>View more</button>
          </div>
        ))}

        <div className={styles.hot}>
          <div>
            <h2>Hotel Sooriya</h2>
            <p>New Washermenpet , Chennai-81</p>
          </div>
          <button>View more</button>
        </div>
        <div className={styles.hot}>
          <div>
            <h2>Ibaco</h2>
            <p> Thiruvottriyur, Chennai-19</p>
          </div>
          <button>View more</button>
        </div>
      </div>
    </div>
  );
}
