import styles from '@/styles/Questions.module.scss'

import Accordion from 'react-bootstrap/Accordion';

import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

export default function Questions() {

  const { t, lang } = useTranslation('common')
  const router = useRouter()
  const { locale } = router 

  return (
    <>
      <div className={styles.questions}>
        <div className='container'>
          <div className='row justify-content-start text-center text-md-start'>
            <div className='col-md-10 offset-md-1'>
                <span>{t('questionTitle2')}</span>
                <h3>{t('questionTitle1')}</h3>
                <Accordion defaultActiveKey='0'>
                    <Accordion.Item eventKey='0'>
                        <Accordion.Header>{t('questionQ1')}</Accordion.Header>
                        <Accordion.Body>
                        {t('questionA1')}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='1'>
                        <Accordion.Header>{t('questionQ2')}</Accordion.Header>
                        <Accordion.Body>
                        {t('questionA2')}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='2'>
                        <Accordion.Header>{t('questionQ3')}</Accordion.Header>
                        <Accordion.Body>
                        {t('questionA3')}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}
