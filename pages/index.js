import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import LayoutSelect from '../components/layoutSelect'
import React, {useEffect, useState} from "react";
import styles from '@/styles/Index.module.scss'
import Image from 'next/image'
import logotipo from '../public/logo.webp'
import Flag from '../public/flag.webp'
import Col from 'react-bootstrap/Col';

import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

export default function Home() {

const { t, lang } = useTranslation('common')

const router = useRouter()
const { locale } = router 

const handleToggle = () => {
    switch (locale) {
      case "pt":
        router.push("/", "/", {locale: "en"})
        break;
      case "en":
        router.push("/", "/", {locale: "pt"})
        break;
    }
 } 

  return (
    <>
      <Head>
        <title>HAYMAN-WOODWARD - {t('exclusiveIn')}</title>
        <meta name='description' content={t('ctaTitle1')} />
        <meta property='og:title' content={`HAYMAN-WOODWARD - ` +t('exclusiveIn')} />
        <meta property='og:description' content={t('ctaTitle1')} />
        <meta property='og:url' content='https://brasil.haymanwoodward.com' />
        <meta property="og:image:height" content="1005" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image" content="https://res.cloudinary.com/dkrpbdexy/image/upload/v1677596226/Hayman-Woodward/og-image_fazdj9.png" />
        <meta property='og:type' content='website'/>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#c99f32" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Script
        id='jquery-bugfix'
        strategy='lazyOnload'
        src="https://code.jquery.com/jquery-3.6.0.min.js"
          integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
          crossorigin="anonymous"
      />

        <div className={styles.select}>
          <div className={'container'}>
            <div className={'row justify-content-center'}>
              <div className={'col-md-5'}>
                <div className={'row'}>
                  <div className={'col-md-12'}>
                    <Image src={logotipo} alt="Hayman-Woodward" quality='100' className={styles.logotipo}/>
                  </div>
                  <div className={'col-md-12 mt-4 ' + styles.title}>
                    <h1>{t('exclusiveIn')} <Image src={Flag} alt="Event Country Flag" quality='100'/></h1>
                    <h3>{t('select')}:</h3>
                  </div>
                  <div className={'col-md-12 my-2 ' + styles.link}>
                    <Link href={`/`+locale+`/webinar`}>{t('webinar')} | {t('may30')}</Link>
                  </div>
                  <div className={'col-md-12 my-2 ' + styles.link}>
                    <Link href={`/`+locale+`/rio-verde/evento`}>{t('localeRV')} | {t('dateRV')} | {t('live')}</Link>
                  </div>
                  <div className={'col-md-12 my-2 ' + styles.link}>
                    <Link href={`/`+locale+`/goiania/evento`}>{t('localeGOI')} | {t('dateGOI')} | {t('live')}</Link>
                  </div>
                  <div className={'col-md-12 my-2 ' + styles.link}>
                    <Link href={`/`+locale+`/belo-horizonte/evento`}>{t('localeBH')} | {t('dateBH')} | {t('live')}</Link>
                  </div>
                  <div className={'col-md-12 my-2 ' + styles.link}>
                    <Link href={`/`+locale+`/governador-valadares/evento`}>{t('localeGV')} | {t('dateGV')} | {t('live')}</Link>
                  </div>
                  <div className={'col-md-12 my-2 ' + styles.link}>
                    <Link href={`/`+locale+`/sao-paulo/evento`}>{t('localeSP')} | {t('dateSP')} | {t('live')}</Link>
                  </div>
                  <div className={'col-md-12 my-2 ' + styles.link}>
                    <Link href={`/`+locale+`/curitiba/evento`}>{t('localePR')} | {t('datePR')} | {t('live')}</Link>
                  </div>
                  <div className={'col-md-12 my-2 ' + styles.link}>
                    <Link href={`/`+locale+`/porto-alegre/evento`}>{t('localeRS')} | {t('dateRS')} | {t('live')}</Link>
                  </div>
                  <div className={'col-md-12 my-2 mt-4 ' + styles.localeFlag}>
                  <span onClick={handleToggle}>
                    {t('changeLanguage')}{locale === 'en'? "Portugues" : "English"}
                  </span>
                  </div>
                  <div className={'col-md-12 mt-5'}>
                    <div className='row'>
                      <Col sm={12} className={styles.copyright + ' text-center'}>
                      {t('disclaimer1')}
                        <br />
                        <strong className='mt-2 d-block'>{t('disclaimer2')}</strong>
                      </Col>
                      <Col sm={12} className={styles.haybrand + ' text-center py-5'}>
                      © 2023 Hayman-Woodward {t('developed')} <span>Hay Branding</span>.
                      </Col>
                    </div>
                  </div>
                </div>
              </div>
            </div> 

          </div>
        </div>

      

    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
      <LayoutSelect>{page}</LayoutSelect>
  )
}