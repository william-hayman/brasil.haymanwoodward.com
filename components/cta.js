import styles from '@/styles/Cta.module.scss'

import Link from 'next/link'
import Image from 'next/image'
import Flag from '../public/flag.webp'

import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

export default function Cta({url, localeId, eventDate, eventType, eventHour}) {

  const { t, lang } = useTranslation('common')
  const router = useRouter()
  const { locale } = router 

  return (
    <>
      <div className={styles.cta}>
        <div className='container'>
          <div className='row justify-content-start text-center text-md-start'>
            <div className='col-md-7'>
                <h3 className={styles.flag}>{t('exclusiveIn')} <Image src={Flag} alt="Flag" quality='100'/></h3>
                <h1>{t('ctaTitle1')}</h1>
                <h2>{t('ctaTitle2')} HAYMAN-WOODWARD</h2>
                <span>{localeId} | {eventDate} | {eventHour} | {eventType}</span>
                <Link href={`/`+locale+`/`+url+`/signup`} >{t('exclusiveCta')}</Link>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
