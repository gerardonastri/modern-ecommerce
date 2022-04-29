import React, { useEffect, useState } from 'react'
import styles from '../styles/HeroBanner.module.css'
import Link from 'next/link'
import {axiosReq} from '../util/apiCalls'
import axios from 'axios'

const HeroBanner = () => {
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
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.beatsSolo}>{banner?.smallText}</p>
        <h3>Wireless</h3>
        <h1>HEADPHONES</h1>
        <img src={banner?.image} alt="headphones" className={styles.image} />
        
        <div>
          <Link href={`/product/${banner?._id}`} passHref>
            <button type='button'>Shop now</button>
          </Link>
          <div className={styles.desc}>
            <h5>Description</h5>
            <p>{banner?.description}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroBanner


