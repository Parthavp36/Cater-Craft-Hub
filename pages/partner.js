import React from 'react'
import Nav from '../components/navbar'
import styles from '../styles/profile.module.css'
import Partnerr from '../components/profilee'
export default function Partner()
{
    return(
        <div className={styles.full}>
        <Nav/>
        <Partnerr/>
        </div>
    )
}