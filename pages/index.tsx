import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
const Home: NextPage = () => {
  const router = useRouter();
  const handleRouter = () => {
    router.push("/Login");
  };
  const handleRouterUat = () => {
    router.push("/uats");
  };
  return (
    <div className={styles.container}>
        ok ok
         <p  className='text-blue-400' onClick={handleRouter}>

           Đăng Nhập
         </p>
         <p onClick={handleRouterUat}>

            Uat
         </p>

    </div>
  )
}

export default Home
