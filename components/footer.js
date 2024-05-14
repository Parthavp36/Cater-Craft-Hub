import React from "react";
import styles from '../styles/Footer.module.css';
import Image from "next/image";
export default function Footer()
{
    return (
        <>
        <div className={styles.cont}>
            <div>
                <h2>About us</h2>
                <ul>
                    <li>About Company</li>
                    <li>Popular Caterers</li>
                    <li>FAQ</li>
                    <li>Work With Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div>
                <h2>Order Catering</h2>
                <ul>
                    <li>Catering Companies</li>
                    <li>Concierge Services</li>
                </ul>
            </div>
            <div>
                <h2>Business</h2>
                <ul>
                    <li>Partner with Caters</li>
                    <li>Corporative Accounts</li>
                </ul>
            </div>
            <div>
                <h2>Social Links</h2>
                <Image src="/images/links.png" height={200} width={200} />

                </div>
        </div>
        </>
    )
}