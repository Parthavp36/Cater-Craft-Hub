import AccordionDemo  from "../components/accord";
import styles from '../styles/Profile.module.css';
import Nav from '../components/catnav'
export default function Accord()
{
    return(
        <div className={styles.full}>
        <Nav/>
        <AccordionDemo/>
        </div>
    )
}