// components/layout.js
import NavbarTop from './navbar'
import Footer from './footer'
import Script from 'next/script'
import Head from 'next/head'

import styles from '../styles/Layout.module.scss'

export default function Layout({ url, children }) {
  return (
    <>
      <div className={styles.app}>
        <NavbarTop url={url}/>
        <section className='content'>
          {children}
        </section>
        <Footer />
        <Script src="https://kit.fontawesome.com/d46c7a63c1.js" crossorigin="anonymous"/>
      </div>
    </>
  )
}