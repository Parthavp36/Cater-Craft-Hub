import Banner from "../components/banner";
import Nav from "../components/navbar";
import styles from '../styles/Profile.module.css';
import { useRouter } from "next/router";
export default function Profile()
{
    const router = useRouter();
    const {name}=router.query;
    return(
        <div className={styles.full}>
        <Nav name={name}/>
        <Banner name={name}/>
        </div>
    )
}