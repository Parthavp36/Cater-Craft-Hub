'use client'
import React ,{useState,useEffect} from "react";
import styles from '../styles/Nav.module.css'
import { FaBars } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import Sidebar from "./catnav";
import { TbFileInvoice } from "react-icons/tb";
export default function CatNav(props)
{
    const name = props.name;
    // console.log("nav" + name);
    const [val,setval]=useState(false);
    const [cart,setcart]=useState('');
    const [wish,setwish]=useState('');
    const [profile,setprofile]=useState('');
    const change = () =>
    {
        {props.val == 'cart' ? setcart('#F3B802') : (props.val == 'profile') ? setprofile('#F3B802') : (props.val == 'wishlist') ? setwish('#F3B802'): ''}
    }
    useEffect(()=>{
        change();
    },[]);
    return (
        <>
        <div className={styles.nav}>
            <div className={styles.left}>
                {/* <FaBars className={styles.icon} onClick={()=>setval(true)} style={{marginTop:-5}}/> */}
                <h1>Caters</h1>
                <select>
                    <option value={0}>Chennai</option>
                    <option value={1}>Bangalore</option>
                </select>
            </div>
            <div className={styles.right}>
            <div><LuShoppingCart className={styles.icon} style={{color:`${cart}`}}/><Link href={{pathname:'/catitems', query:{name:name}}} className={styles.lnk}><p style={{color:`${cart}`}}>Add items</p></Link></div>
            {/* <div><FaRegHeart className={styles.icon} style={{fontSize:17,marginTop:20,color:`${wish}`}}/><Link href='/wishlist' className={styles.lnk}><p style={{color:`${wish}`}}>Wishlist</p></Link></div> */}
            <div><CgProfile className={styles.icon} style={{color:`${profile}`}}/><Link href={{pathname:'/catprofile' , query : {name: name}}} className={styles.lnk}><p style={{color:`${profile}`}}>Profile</p></Link></div>
            </div>
        </div>
        </>
    )
}