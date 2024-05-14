import React, { useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import firebase from './firebase';
import styles from '../styles/LoginForm.module.css';
import Link from 'next/link';
import { IoMdTennisball } from 'react-icons/io';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [items, setItems] = useState([]);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const clt = collection(db, 'users');
      const snap = await getDocs(clt);
      const itemsData = snap.docs.map((doc) => doc.data());
      setItems(itemsData);
      console.log(items)
    } catch (e) {
      setError('Error fetching data');
    }
  };

  useEffect(() => {
    if (items.length === 0 || loginSuccess) return;

    for (let i = 0; i < items.length; i++) {
      if (items[i].name === email && items[i].password === password && items[i].type === "User") {
        setLoginSuccess(true);
        router.push({
          pathname: '/Home',
          query: { prop: email },
        });
        return;
      }
      else if(items[i].name === email && items[i].password === password && items[i].type === "caterer")
      {
        setLoginSuccess(true);
        router.push({
          pathname: '/cathome',
          query: { prop: email },
        });
        return;
      }
    }

    // If no user found with matching credentials
    setError('Invalid email or password');
  }, [items, email, password, loginSuccess, router]);

  return (
    <div>
      <h1 style={{ textAlign: 'center', fontFamily: 'verdana' }}>Login</h1>
      {error && <p style={{ color: 'red', textAlign: 'center', fontFamily: 'verdana' }}>{error}</p>}
      <form onSubmit={handleSubmit} className={styles.cont}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div>
          <Link href="" id={styles.lnk}>
            Forgot password?
          </Link>
          <Link href="/register" id={styles.lnk}>
            Haven't signed up?
          </Link>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
