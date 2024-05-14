import React from "react";
import styles from '../styles/Cart.module.css'
import Image from 'next/image'
import { MdDelete } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
export default function Cart()
{
    return (
        <div className={styles.over}>
            <div id={styles.heading}>
            <h2>My Cart</h2>
            <p>you have 2 items in your cart</p>
            </div>
            <div className={styles.tot}>
                
                <div className={styles.sec}>
                <p style={{fontSize:20}}>Your Items</p>
                    <table>
                        <thead>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </thead>
                        <tbody>
                        <tr>
                            <td><Image src='/images/idly.jpg' height={70} width={70}/></td>
                            <td>Idly</td>
                            <td>100</td>
                            <td>Rs.5/-</td>
                            <td><MdDelete className={styles.icon}/></td>
                        </tr>
                        <tr>
                            <td><Image src='/images/pongal.jpg' height={70} width={70}/></td>
                            <td>Dosa</td>
                            <td>100</td>
                            <td>Rs.7/-</td>
                            <td><MdDelete className={styles.icon}/></td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className={styles.bill}>
                        <table>
                            <tr>
                                <td>Subtotal</td>
                                <td><FaRupeeSign/>1200</td>
                            </tr>
                            <tr>
                                <td>Delivery</td>
                                <td><FaRupeeSign/>200</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td><FaRupeeSign/>1400</td>
                            </tr>
                        </table>
                        <button>Checkout</button>
                    </div>
                </div>
            </div>
        )
}