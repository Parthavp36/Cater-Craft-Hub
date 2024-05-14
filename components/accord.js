import React , {useState,useId} from 'react'
import styles from '../styles/AccordionDemo.module.css'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
export default function AccordionDemo()
{
    const [status,setstatus]=useState(false);
    const [status1,setstatus1]=useState(false);
    const [status2,setstatus2]=useState(false);
    const [status3,setstatus3]=useState(false);
    const [status4,setstatus4]=useState(false);
    return(
        <div className={styles.cont}>
            <h2>FAQ</h2>
            <div className={styles.content}>
                <div>
                    <p style={{color:'black',fontSize:20,textAlign:'center',marginTop:15}}>What is Caters ? </p>
                    {status == true ? <IoIosArrowUp className={styles.icon} onClick={()=>setstatus(false)}/> : 
                    <IoIosArrowDown className={styles.icon} onClick={()=>setstatus(true)}/> }
                </div>
                {status && <p>Caters is a convenient service for ordering food to the office or events, combining the best catering and restaurants in your city.</p> }
            </div>
            <div className={styles.content}>
                <div>
                    <p style={{color:'black',fontSize:20,textAlign:'center',marginTop:15}}>How does Caters work ? </p>
                    {status1 == true ? <IoIosArrowUp className={styles.icon} onClick={()=>setstatus1(false)}/> : 
                    <IoIosArrowDown className={styles.icon} onClick={()=>setstatus1(true)}/> }
                </div>
                {status1 && <p>You study the offers of caters, form a basket and place an order. Then we send the information to the partner and are in touch with him to make sure that everything is going according to plan. At the same time, we inform you about the status of the order.</p> }
            </div>
            <div className={styles.content}>
                <div>
                    <p style={{color:'black',fontSize:20,textAlign:'center',marginTop:15}}>What cities do you work in ? </p>
                    {status2 == true ? <IoIosArrowUp className={styles.icon} onClick={()=>setstatus2(false)}/> : 
                    <IoIosArrowDown className={styles.icon} onClick={()=>setstatus2(true)}/> }
                </div>
                {status2 && <p>Now the service works in kochi, Soon we will appear in other major cities of India.</p> }
            </div>
            <div className={styles.content}>
                <div>
                    <p style={{color:'black',fontSize:20,textAlign:'start',marginTop:15}}>Will I overpay if I order not directly, but through caters ? </p>
                    {status3 == true ? <IoIosArrowUp className={styles.icon} onClick={()=>setstatus3(false)}/> : 
                    <IoIosArrowDown className={styles.icon} onClick={()=>setstatus3(true)}/> }
                </div>
                {status3 && <p>No! You always pay the same amount as when ordering directly. Our partner's profile shows current prices. If you find a price lower than in your profile, we will refund the difference and give a coupon for the next order.</p> }
            </div>
            <div className={styles.content}>
                <div>
                    <p style={{color:'black',fontSize:20,textAlign:'start',marginTop:15}}>What is the minimum order size? </p>
                    {status4 == true ? <IoIosArrowUp className={styles.icon} onClick={()=>setstatus4(false)}/> : 
                    <IoIosArrowDown className={styles.icon} onClick={()=>setstatus4(true)}/> }
                </div>
                {status4 && <p>Each restaurant and catering has a minimum order. This information is in the description on the partner's page.</p> }
            </div>

        </div>
    )
}
