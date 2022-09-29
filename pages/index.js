import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


//=========================  LOGIN PAGE ==================
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}