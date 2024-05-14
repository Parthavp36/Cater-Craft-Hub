import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {useRouter} from 'next/router'
import {collection,doc,setDoc} from 'firebase/firestore'
import { db } from './firebase';
import firebase from './firebase';
import styles from '../styles/LoginForm.module.css'
import Link from 'next/link'
const RegPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type,settype] = useState('')
  const [error, setError] = useState('');
  const [contact,setcontact]=useState('');
  const router=useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const auth = getAuth();
      // await createUserWithEmailAndPassword(auth, email, password);
      const clt=collection(db,"users");
      await setDoc(doc(clt,email),{
        name : email,
        password : password,
        type : type,
        contact: contact,
      })
      setError('Registered Successfully')
    } catch (e) {
      setError("Invalid Credentials");
      console.log(e);
    }
  };

  return (
    <div>
      <h1 style={{textAlign:'center',fontFamily:'verdana'}}>Register</h1>
      {error && <p style={{ color: 'blue',textAlign:'center',fontFamily:'verdana'}}>{error}</p>}
      <form onSubmit={handleSubmit} className={styles.cont}>
          <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          <input type="text" placeholder='User or Caterer' value={type} onChange={(e)=>settype(e.target.value)}/>
          <input type="text" placeholder='Phone Number' value={contact} onChange={(e)=>setcontact(e.target.value)}/>
          <div>
            <Link href='/login' id={styles.lnk}>back to Login</Link>
          </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegPage;
