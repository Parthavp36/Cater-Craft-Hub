import React from "react";
import styles from '../styles/Wish.module.css'
export default function Wish()
{
    return(
        <div className={styles.over}>
        <div className={styles.sec}>
            <h2 id={styles.si}>My Wishlist</h2>
            <div className={styles.hot}>
                <div>
                <h2>Hotel Sooriya</h2>
                <p>New Washermenpet , Chennai-81</p>
                </div>
                <div>
                <button>View more</button>
                <button>Remove</button>
                </div>
            </div>
            <div className={styles.hot}>
                <div>
                <h2>Ibaco</h2>
                <p> Thiruvottriyur, Chennai-19</p>
                </div>
                <div>
                <button>View more</button>
                <button>Remove</button>
                </div>
            </div>
        </div>
        </div>
    )
}