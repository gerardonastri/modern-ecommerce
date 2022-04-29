import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
     <span className={styles.footerTerms}>&copy; Phanox All Rights Reserved</span>
     <span className={styles.footerIcons}>
       <Link passHref href="https://www.instagram.com/illgerardo/"><InstagramIcon /></Link>
        <Link passHref href="https://www.linkedin.com/in/gerardo-nastri-a31240237/"><LinkedInIcon /></Link>
     </span>
    </div>
  )
}

export default Footer