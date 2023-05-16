import Script from 'next/script'
import Head from 'next/head'

import styles from '../styles/Layout.module.scss'

export default function LayoutSelect({ children }) {
  return (
    <>
      <div className={styles.app}>
        <section className='content'>
          {children}
        </section>
        <Script src="https://kit.fontawesome.com/d46c7a63c1.js" crossorigin="anonymous"/>
      </div>
    </>
  )
}