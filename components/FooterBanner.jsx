import React from 'react'
import styles from '../styles/FooterBanner.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {axiosReq} from '../util/apiCalls'

const FooterBanner = () => {
  const [banner, setBanner] = useState(null)

  useEffect(() => {
    const getBanner = async () => {
      try {
        const banner = await axiosReq.get("banner/");
      setBanner(banner.data)
      } catch (error) {
        console.log(error);
      }
    }
    getBanner()
  }, []);
  console.log(banner);
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.beatsSolo}>{banner?.discount}% OFF</p>
        <h1>{banner?.largeText}</h1>
        <h1 style={{marginBottom: '40px'}}>{banner?.largeText2}</h1>
        <img src={banner?.image} alt="headphones" className={styles.image} />
        
        <div>
          <Link href={'/product/ID'} passHref style={{marginTop: '40px'}}>
           <span className={styles.saleDate}>{banner?.saleTime}</span>
          </Link>
          <div className={styles.desc}>
            <span className={styles.beatsSolo2}>{banner?.smallText}</span>
            <h3 >{banner?.midText}</h3>
            <p>company that's grown from 270 to 480 employees in the last 12 months</p>
            <Link href={`/product/${banner?._id}`} passHref>
              <button type='button'>Shop Now</button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FooterBanner

