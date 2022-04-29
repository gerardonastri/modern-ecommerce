import React from 'react'
import styles from '../styles/Cart.module.css'
import Image from "next/image"
import Link from 'next/link'
import { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {useStateContext} from '../context/StateContext'
import {axiosReq} from '../util/apiCalls'
import getStripe from '../util/getStripe'
import toast from 'react-hot-toast'

const Cart = ({setShowCart}) => {
    const [quantity, setQuantity] = React.useState(1);
    const {totalPrice, totalQuantities, cartItems, toggleCartItemQuanitity, onRemove} = useStateContext()

    const handleCheckout = async () => {
        const stripe = await getStripe();

        const res = await axiosReq.post('stripe', {
            cartItems
        })
        if(res.status === 500) return

        toast.loading('Redirecting...')
        stripe.redirectToCheckout({sessionId: res.data.id})
    }

  return (
    <div className={styles.container}>
        <div className={styles.topbar}>
            <div className={styles.icon} onClick={() => setShowCart(false)}><ArrowBackIosIcon /></div>
            <span>Your Cart</span>
            <span className={styles.counter}>({cartItems.length} items)</span>
        </div>
        {cartItems < 1 && (
            <div className={styles.emptyCart}>
             <h3>Your shopping bag is empty :/</h3>
           </div>
        )}

        {cartItems.length >=1 && cartItems.map((item) => (
            <div className={styles.product}>
            <div className={styles.image}>
                <img src={item.image} alt="headphones"/>
            </div>
            <div className={styles.info}>
                <div className={styles.infoUp}>
                    <h3>{item.name}</h3>
                    <span>${item.price}</span>
                </div>
                <div className={styles.infoDown}>
                    <span className={styles.quantityActions}>
                        <span onClick={() => toggleCartItemQuanitity(item._id, 'dec')}>-</span>
                        <span>{item.quantity}</span>
                        <span onClick={() => toggleCartItemQuanitity(item._id, 'inc')}>+</span>
                    </span>
                    <HighlightOffIcon onClick={() => onRemove(item)} />
                </div>
            </div>
        </div>
        ))}
        {cartItems.length >= 1 && (
            <div className={styles.total}>
                <span>Subtotal: </span>
                <span>${totalPrice}</span>
            </div>
        )}
        <div className={styles.buttonContainer} onClick={handleCheckout}>
            <button>PAY WITH STRIPE</button>
        </div>
    </div>
  )
}

export default Cart