import styles from '@/styles/About.module.scss'
import Link from 'next/link'
import Fade from 'react-reveal/Fade';

import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

export default function About({url}) {

  const { t, lang } = useTranslation('common')
  const router = useRouter()
  const { locale } = router 

  return (
    <>
      <div className={styles.about} id='about'>
        <div className='container'>
          <div className='row text-center text-md-start'>
            <div className='col-md-10 offset-md-1'>
              <Fade bottom>
                <h5>{t('eventAboutTitle')}</h5>
              </Fade>
              <Fade bottom>
                <p>{t('eventAboutP1')} <strong> {t('eventAboutP2')} </strong> {t('eventAboutP3')} <strong> Green Cards </strong> - {t('eventAboutP4')}. </p>
              </Fade>
              <Fade bottom>
                <h4>{t('eventAboutP5')}</h4>
              </Fade>
              <Fade bottom>
                <p className={styles.sub}>{t('eventAboutP6')} <strong>{t('eventAboutP7')} </strong> - {t('eventAboutP8')}.</p>
              </Fade>
            </div>
          </div>
          <div className='row'>
          <div className='offset-md-1 col-md-4'>
            <div className={styles.line}></div>
          </div>
          <div className='col-md-5 text-center text-md-start'>
          <Fade bottom>
            <span>{t('exclusiveTitle')}:</span>
          </Fade>
          <Fade bottom>
            <ul>
                <li className='text-center text-md-start'>{t('exclusiveL1')};</li>
                <li className='text-center text-md-start'><strong>({t('exclusiveL2')})</strong></li>
                <li className='text-center text-md-start'>{t('exclusiveL3')};</li>
                <li className='text-center text-md-start'>{t('exclusiveL4')};</li>
            </ul>
            </Fade>
            <Fade bottom>
              <Link href={`/`+locale+`/`+url+`/signup`} className={styles.cta}>{t('exclusiveCta')}</Link >
            </Fade>
          </div>
          </div>
        </div>
      </div>

    </>
  )
}
