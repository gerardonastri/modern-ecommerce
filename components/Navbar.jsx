import styles from '../styles/Navbar.module.css'
import Image from "next/image"
import Link from 'next/link'
import { useState } from 'react'
import React from "react";
import Badge from '@mui/material/Badge';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useStateContext } from '../context/StateContext';

const Navbar = ({setShowCart, showCart}) => {
    const { cartItems} = useStateContext()

   return (
       <div className={styles.container}>
           <Link passHref href={'/'}>
                <h2 style={{cursor: 'pointer'}}>PHANOX</h2>
           </Link>
            <div className={styles.cartIcon} onClick={() => setShowCart(true)}>
            <Badge badgeContent={cartItems.length} color="primary">
                <ShoppingBagOutlinedIcon color='action' />
            </Badge>
            </div>
       </div>
   )
}

export default Navbar

