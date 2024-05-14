import AccordionDemo  from "../components/accord";
import styles from '../styles/Profile.module.css';
import Nav from '../components/navbar'
import { useRouter } from "next/router";
import Ind from "../components/ind";
export default function Hotel()
{
    const router=useRouter();
    const {name,hot_name} = router.query;
    console.log("hotel"+name);
    return(
        <div className={styles.full}>
        <Nav name={name}/>
        <Ind name={name} hotel={hot_name} />
        </div>
    )
}