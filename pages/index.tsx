import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Just Desserts</title>
        <meta name="description" content="Desserts App for the Stressed" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <h1>Just Desserts</h1>
    </div>
  )
}

export default Home
