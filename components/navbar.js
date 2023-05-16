import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import React, { useState, useEffect } from "react"

import styles from '../styles/Navbar.module.scss'

import Image from 'next/image'
import logotipo from '../public/logo.webp'

import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'


export default function CollapsibleExample({url}) {

  const { t, lang } = useTranslation('common')
  const router = useRouter()
  const { locale } = router 

  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 10) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })


  return (
    <Navbar className={navbar ?
      styles.navbarFixed + " " + styles.navbarBlack :
      styles.navbarFixed + "  navbar navbar-expand-lg navbar-dark fixed-top"
      } collapseOnSelect expand="lg" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href={`/`+locale+`/`+url+`/`}>
          <Image src={logotipo} alt="Hayman-Woodward" quality='100' className={styles.logotipo}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={styles.flexEnd + " ms-auto"}>
                <Nav.Link className={styles.link} href={`/`+locale+`/`+url+`/`}>{t('home')}</Nav.Link>
                <Nav.Link className={styles.link} href={`/`+locale+`/`+url+`/#about`}>{t('aboutUs')}</Nav.Link>
                <Nav.Link className={styles.link + ' ' + styles.especial} href={`/`+locale+`/`+url+`/signup`}>{t('exclusiveCta')}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// export default CollapsibleExample;