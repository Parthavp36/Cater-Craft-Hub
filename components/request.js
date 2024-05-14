import React from "react";
import styles from '../styles/Request.module.css'
export default function Request()
{
    return (
        <>
        <div className={styles.cont}>
            <div>
                <h1>Concierge service</h1>
                <p>Leave a request and get several menu options for your event.</p>
                <button>Leave a request</button>
                </div>
        </div>
        </>
    )
}