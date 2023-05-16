// components/footer.js

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link'
import Script from 'next/script'

import Image from 'next/image'
import logotipo from '../public/logo.webp'

import styles from '../styles/Footer.module.scss'

import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import setLanguage from 'next-translate/setLanguage'

function Footer()  {

  const { t, lang } = useTranslation('common')
  const router = useRouter()
  const { locale } = router 

    return (
      <>
        <footer className={styles.footer}>
            <Container>
                <Row>
                    <Col sm={6} className={styles.alignLeft + ' text-center text-md-start'}>
                      <Image src={logotipo} alt="Hayman-Woodward" quality='100' className={styles.logo + ' '}/>
                    </Col>
                    <Col sm={6} className={styles.alignRight + ' text-center text-md-end'}>
                    {t('disclaimer1')}
                        <br />
                        <strong className='mt-2 d-block'>{t('disclaimer2')}</strong>
                        <div className="pt-2 flex flex-wrap gap-2">
                          <Image src="/flagPt.png" width={20} height={15} onClick={async () => await setLanguage('pt')} alt="pt-br" className="cursor-pointer d-inline-block mx-3"/>
                          <Image src="/flagUs.png" width={20} height={15}  onClick={async () => await setLanguage('en')}  alt="en-us" className="cursor-pointer"/>
                        </div>  
                    </Col>
                    <Col sm={12} className={styles.alignCenter + ' text-center py-5'}>
                    © 2023 Hayman-Woodward {t('developed')} <span>Hay Branding</span>.
                    </Col>
                </Row>
            </Container>
            <noscript
              id='gtag-manager-footer'
              dangerouslySetInnerHTML={{
                __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NHZRL5V"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
              }}
            />
        </footer>
      </>
    );
  }

export default Footer;