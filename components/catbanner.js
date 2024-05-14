import React, { useState, useEffect } from 'react';
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import styles from '../styles/Banner.module.css';
import Image from 'next/image';

export default function Catbanner(props) {
  const name = props.name;
  const [items, setItems] = useState([]);
  const [ids, setIds] = useState([]);
  const [hot, setHot] = useState('');
  const [arr, setArr] = useState([]);
  const [stat, setStat] = useState(false);

  const handleAdd = async () => {
    try {
      const clt = collection(db, "hotels");
      await setDoc(doc(clt, hot), {
        owner: `${name}`,
        contact: '7456324354', // Add any other fields you need for the service
      });
      alert(`Service name ${hot} added successfully !!!`);
    } catch (error) {
      console.error('Error adding service:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cl = collection(db, "hotels");
        const snap = await getDocs(cl);
        const temp = snap.docs.map(doc => doc.data());
        const tmp = snap.docs.map(doc => doc.id);
        setArr(temp);
        setIds(tmp);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].owner === name) {
            const sam = ids[i];
            const clt = collection(db, "hotels", sam, "orders");
            const snap = await getDocs(clt);
            const temp = snap.docs.map(doc => doc.data());
            setItems(temp);
          }
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchData();
  }, [name, arr, ids]);

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
          {stat ? (
            <span>
              <input
                type='text'
                placeholder='Enter service name'
                value={hot}
                onChange={(e) => setHot(e.target.value)}
                style={{ color: 'white', textAlign: 'center' }}
              />
              <button onClick={() => { setStat(false); handleAdd(); }}>Add</button>
            </span>
          ) : (
            <button onClick={() => setStat(true)} style={{ width: 'auto' }}>Add Service name</button>
          )}
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

        {/* Sample items for testing */}
        <div className={styles.hot}>
          <div>
            <h2>Hotel Sooriya</h2>
            <p>New Washermenpet, Chennai-81</p>
          </div>
          <button>View more</button>
        </div>
        <div className={styles.hot}>
          <div>
            <h2>Ibaco</h2>
            <p>Thiruvottriyur, Chennai-19</p>
          </div>
          <button>View more</button>
        </div>
      </div>
    </div>
  );
}
