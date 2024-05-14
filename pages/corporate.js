import React from 'react'
import Nav from '../components/navbar'
import styles from '../styles/profile.module.css'
import Corporate from '../components/corp'
export default function Partner()
{
    return(
        <div className={styles.full}>
        <Nav/>
        <Corporate/>
        </div>
    )
}