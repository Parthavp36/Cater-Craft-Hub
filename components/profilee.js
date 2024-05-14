import React from "react";
import styles from '../styles/Partner.module.css';
import { MdOutlineStickyNote2 } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { BsBagCheckFill } from "react-icons/bs";
import { GrDeliver } from "react-icons/gr";
export default function Partner()
{
    return (
        <div className={styles.over}>
            <p>Partner with Caters</p>
            <p style={{fontSize:16,marginTop:0}}>How we work with partners</p>
        <div className={styles.sec}>
            <MdOutlineStickyNote2 className={styles.icon}/>
            <div>
                <p style={{color:'gray'}}>Step 1</p>
                <strong><p>You leave a request</p></strong>
                <p>Payment by invoice, card,cash or deposit. Closing documents without delay.</p>
            </div>
        </div>
        <div className={styles.sec}>
            <TiThMenu className={styles.icon} style={{backgroundColor:'#FFA07A'}}/>
            <div>
                <p style={{color:'gray'}}>Step 2</p>
                <strong><p>We will promptly add to the menu database</p></strong>
                <p>Permanent discount for corporate clients only. Accumulated bonuses can pay up to 100% of the order.</p>
            </div>
        </div>
        <div className={styles.sec}>
            <BsBagCheckFill className={styles.icon} style={{backgroundColor:'#29AB87'}}/>
            <div>
                <p style={{color:'gray'}}>Step 3</p>
                <strong><p>Let us know about orders</p></strong>
                <p>Menu selection according to your taste and budget. Order execution control at all stages. Operational assistance 24/7.</p>
            </div>
        </div>
        <div className={styles.sec}>
            <GrDeliver className={styles.icon} style={{backgroundColor:'#FADA5E'}}/>
            <div>
                <p style={{color:'gray'}}>Step 4</p>
                <strong><p>Do you cook and deliver food</p></strong>
                <p>Menu selection according to your taste and budget. Order execution control at all stages. Operational assistance 24/7</p>
            </div>
        </div>
        <p style={{fontSize:18,marginLeft:15}}>Add a restaurant or catering to our catalog</p>
        <button>Submit your Application</button>
        </div>
    )
}