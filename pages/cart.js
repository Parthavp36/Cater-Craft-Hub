import Nav from "../components/navbar";
import Cart from "../components/cartt";
import styles from '../styles/Profile.module.css'
export default function Bag()
{
    return(
        <div className={styles.full}>
        <Nav val='cart'/>
        <Cart/>
        </div>
    )
}