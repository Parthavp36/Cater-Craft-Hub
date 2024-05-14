import Catbanner from "../components/catbanner";
import Catbanneranner from "../components/catbanner";
import CatNav from "../components/catnav";
import Add from "../components/additem";
import styles from '../styles/Profile.module.css';
import { useRouter } from "next/router";
export default function Profile()
{
    const router = useRouter();
    const {name}=router.query;
    return(
        <div className={styles.full}>
        <CatNav name={name}/>
        <Add name={name}/>
        </div>
    )
}