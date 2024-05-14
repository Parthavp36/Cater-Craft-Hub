import React ,{useState,useEffect} from 'react';
import {db} from '../components/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import firebase from '../components/firebase';
export default function Logdemo()
{
    const [name,setname]=useState('') 
    const check = async ()=>
    {
        console.log('yes,entered')
        const q=query(collection(db,"users"), where("email","==",name && "password","==","1234"));
        const res=await getDocs(q);
        if(!res.empty)
        {
            console.log('sdfs');
        }
    }
    return(
        <>
        <input type='text' value={name} onChange={(e)=>setname(e.target.value)}/>
        <button onClick={()=>check()}></button>
        </>
    )
}