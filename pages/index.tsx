import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';
// import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Just Desserts</title>
        <meta name="description" content="Desserts App for the Stressed" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      
    </div>
  )
}

export default Home
