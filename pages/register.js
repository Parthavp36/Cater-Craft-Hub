import AccordionDemo  from "../components/accord";
import styles from '../styles/Profile.module.css';
import Nav from '../components/navbar'
import Ind from "../components/ind";
import RegPage from "../components/reg";
export default function Hotel()
{
    return(
        <div className={styles.full}>
        <RegPage/>
        </div>
    )
}