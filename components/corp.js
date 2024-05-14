import React from "react";
import styles from '../styles/Corporate.module.css'
import { MdOutlineStickyNote2 } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { GrUserManager } from "react-icons/gr";
export default function Corporate()
{
    return(
         <div className={styles.over}>
            <div id={styles.head}>
                <p>Benefits for corporate clients</p>
                <p style={{fontSize:15,color:'gray'}}>Payment by invoice, card,cash or deposit. Closing documents without delay.</p>
            </div>
            <div className={styles.sec}>
                <div>
                <MdOutlineStickyNote2 className={styles.icon}/>
                <p style={{marginTop:60}}>Single contract - more than 500 restaurants</p>
                <p style={{color:'gray',fontSize:14}}>Tell us about your event. We will send a selection of suitable caterers.</p>
                </div>
                <div>
                <CiDiscount1 className={styles.icon} style={{backgroundColor:'#FFA07A'}}/>
                <p style={{marginTop:60}}>Discount on all menus and bonuses for each order</p>
                <p style={{color:'gray',fontSize:14}}>Permanent discount for corporate clients only. Accumulated bonuses can pay up to 100% of the order.</p>
                </div>
                <div>
                <GrUserManager className={styles.icon} style={{backgroundColor:'#29AB87'}}/>
                <p style={{marginTop:60}}>Personal manager</p>
                <p style={{color:'gray',fontSize:14}}>Menu selection according to your taste and budget. Order execution control at all stages. Operational assistance 24/7</p>
                </div>
            </div>
            <button>Become a Corporative Account</button>
         </div>
    )
}