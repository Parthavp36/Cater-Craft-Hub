import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css"
import CatNav from "../components/catnav";
import Search from "../components/searchbar";
import Popular from "../components/popular";
import Request from "../components/request";
import Reviews from "../components/reviews";
import Footer from "../components/footer";
export default function Home(props) {
  const router = useRouter();
  const {prop} = router.query;
  console.log(prop);
  return (
      <div className={styles.container}>
      <CatNav name={prop}/>
      <Search />
      <Popular name={prop}/>
      <Request/>
      <Reviews/>
      <Footer/>
      </div>
      );
}
