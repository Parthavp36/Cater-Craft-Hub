import Nav from "../components/navbar";
import All from "../components/all";
import  { useRouter } from "next/router";
import styles from '../styles/Profile.module.css';
export default function Allhot()
{
    const router=useRouter();
    const {name}=router.query;
    return(
        <div className={styles.full}>
        <Nav val='cart'/>
        <All name={name}/>
        </div>
    )
}