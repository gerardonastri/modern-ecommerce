import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {useStateContext} from '../context/StateContext'
import {BsBagCheckFill} from 'react-icons/bs'
import styles from '../styles/Success.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {runFireworks} from '../util/utils'


const Success = () => {
    const {setCartItems, setTotalPrice, setTotalQuantities} = useStateContext()
    
    useEffect(() => {
        localStorage.clear();
        setTotalQuantities(0);
        setCartItems(0);
        setTotalPrice(0);
        runFireworks();
    }, [])

    return (
    <div className={styles.container}>
        <Navbar />
        <div className={styles.wrapper}>
            <div className={styles.success}>
                <p className={styles.icon}>
                    <BsBagCheckFill />
                </p>
                <h2>Thank you for your order</h2>
                <p className={styles.email}>Check your email inbox for the receipt.</p>
                <p className={styles.desc}>
                    If you have any questions, please email 
                    <a href="mailto:gerardonastri.dev@gmail.com"> gerardonastri.dev@gmail.com</a>
                </p>
                <Link href="/" passHref >
                    <button>CONTINUE SHOPPING</button>
                </Link>
            </div>
        </div>
    </div>
  )

}

export default Success