import React from 'react'
import styles from '../styles/Product.module.css'
import Image from "next/image"
import Link from 'next/link'
import { useState } from 'react'

const Product = ({product}) => {
  return (
    <Link passHref href={`/product/${product?._id}`}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={product.image} alt="headphones"/>
        </div>
        <span className={styles.name}>{product.name}</span>
        <span className={styles.price}>${product.price}</span>
      </div>
    </Link>
  )
}

export default Product