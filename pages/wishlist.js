import Nav from "../components/navbar";
import styles from '../styles/Profile.module.css'
import Wish from "../components/wish";
export default function Wishlist()
{
    return(
        <div className={styles.full}>
        <Nav val='wishlist'/>
        <Wish/>
        </div>
    )
}