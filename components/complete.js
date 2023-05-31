
import React, { useState, useEffect } from "react";
import styles from '@/styles/Complete.module.scss'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

import serviceListJson from '../data/services.json'
import countryList from '../data/country.json'
import experienceList from '../data/xp.json'
import academicList from '../data/academic.json'
import langList from '../data/lang.json'
import Link from "next/link";

export default function Complete() {

  const router = useRouter()

  const [ linkEvent, setLinkEvent ] = useState('')
  const [ isEvent, setIsEvent ] = useState(false)

  useEffect(() => {
    if(router.query.event === 'Rio Verde'){
      setLinkEvent('https://calendly.com/haymanwoodward/hw-experience-brasil-rio-verde?month=2023-06&date=2023-06-27')
      setIsEvent(true)
    }
  })

  const { t, lang } = useTranslation('common')

  return (
    <>
      <div className={styles.complete} id='about'>
        <div className='container'>
          <div className='row text-center'>
            <div className='col-md-10 offset-md-1'>
                <h2>{t('completeTitle')}</h2>
                     
                {isEvent ? (
                  <>
                  <p>{t('complete1')}</p>
                  <p className="my-4">{t('complete2')} <Link href={linkEvent} className="text-white fw-bold">{t('complete3')}</Link></p>
                  </>
                ) : (
                  <>
                  <p>{t('complete1')}</p>
                  </>
                )}

                <h4>{t('completeP1')}</h4>

                <ul>
                  <li><a href="https://instagram.com/haymanwoodward"><i className="fa-brands fa-instagram"></i></a></li>
                  <li><a href="https://www.facebook.com/haymanwoodward"><i className="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="https://twitter.com/haymanwoodward"><i className="fa-brands fa-twitter"></i></a></li>
                  <li><a href="https://www.linkedin.com/company/hayman-woodward/"><i className="fa-brands fa-linkedin"></i></a></li>
                  {/* <li><a href="https://api.whatsapp.com/send?phone=12124442100"><i className="fa-brands fa-whatsapp"></i></a></li> */}
                  <li><a href="consult@hw.im"><i className="fa-regular fa-envelope"></i></a></li>
                  <li><a href="https://t.me/haymanwoodward"><i className="fa-brands fa-telegram"></i></a></li>
                </ul>
              
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
