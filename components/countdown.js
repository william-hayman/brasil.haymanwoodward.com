import React, {useEffect, useState} from "react";
import Link from "next/link";
import styles from '@/styles/Countdown.module.scss'

import Video from './video'

import Fade from 'react-reveal/Fade';

import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

export default function Countdown({deadline, url}) {

  const { t, lang } = useTranslation('common')
  const router = useRouter()
  const { locale } = router 

  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [time, setTime] = useState(0)
  const [difference, setDifference] = useState(0)

  function calculateTime(){
    setDifference(+new Date(deadline) - +new Date())
    return time
  }

  React.useEffect(() => {
    calculateTime()
    if (Math.floor(difference / (1000 * 60 * 60 * 24)) >= 0){
      setDays(Math.floor(difference / (1000 * 60 * 60 * 24)))
    }
    if (Math.floor((difference / (1000 * 60 * 60)) % 24) >= 0){
      setHours(Math.floor((difference / (1000 * 60 * 60)) % 24))
    }
    if (Math.floor((difference / 1000 / 60) % 60) >= 0){
      setMinutes(Math.floor((difference / 1000 / 60) % 60))
    }
  })

  return (
    <>

      <div className={styles.countdown}>
        <div className='container'>
          <div className='row text-center justify-content-center'>
            <div className='col-md-12 title'>
              <Video title={t('titleVideo')}/>
            </div>
          </div>
          <div className='row text-center justify-content-center'>
            <div className='col-md-12 title'>
              <h3>{t('countTitle1')}</h3>
            </div>
            <div className='col-md-5'>
              <div className='row text-center justify-content-center'>
                <div className='col-4'>
                  <div className={styles.block}>
                    <div className={styles.count}>{days}</div>
                    <div className={styles.text}>{t('days')}</div>
                  </div>
                </div>
                <div className='col-4'>
                  <div className={styles.block}>
                    <div className={styles.count}>{hours}</div>
                    <div className={styles.text}>{t('hours')}</div>
                  </div>
                </div>
                <div className='col-4'>
                  <div className={styles.block}>
                    <div className={styles.count}>{minutes}</div>
                    <div className={styles.text}>{t('minutes')}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-12'>
              <h4>{t('countTitle2')}</h4>
            </div>
            <div className='col-md-12'>
              <Fade bottom>
                <Link href={`/`+url+`/signup`} className={styles.signup}>{t('exclusiveCta')}</Link>
            </Fade>
            </div>
            
          </div>
        </div>
      </div>

    </>
  )
}
