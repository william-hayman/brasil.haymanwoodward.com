
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
  const [ address, setAddress ] = useState('')
  const [ isEvent, setIsEvent ] = useState(false)

  useEffect(() => {
    if(router.query.event === 'HW Experience Brasil 2023 (Rio Verde)'){
      setLinkEvent('https://calendly.com/haymanwoodward/hw-experience-brasil-rio-verde?month=2023-06&date=2023-06-27')
      setAddress('GELPS HOTEL: R. Abel Pereira de Castro, 1362, Jd. Goiás, Rio Verde - GO')
      setIsEvent(true)
    }
    if(router.query.event === 'HW Experience Brasil 2023 (Goiania)'){
      setLinkEvent('https://calendly.com/haymanwoodward/hw-experience-brasil-goiania?month=2023-07&date=2023-07-03')
      setAddress('CASTRO’S PARK HOTEL: Av. República do Líbano, 1520 - St. Oeste, Goiânia - GO')
      setIsEvent(true)
    }
    if(router.query.event === 'HW Experience Brasil 2023 (Belo Horizonte)'){
      setLinkEvent('https://calendly.com/haymanwoodward/hw-experience-brasil-belo-horizonte?month=2023-07&date=2023-07-06')
      setAddress('MERCURE BH VILA DA SERRA: Alameda Oscar Niemeyer, 405 - Vila da Serra – Nova Lima – MG')
      setIsEvent(true)
    }
    if(router.query.event === 'HW Experience Brasil 2023 (Governador Valadares)'){
      setLinkEvent('https://calendly.com/haymanwoodward/hw-experience-brasil-governador-valadares?month=2023-07')
      setAddress('SAN DIEGO SUITES: R. Ten-Cel. Francisco Rodrigues, 51 - Morada do Acampamento, Gov. Valadares - MG')
      setIsEvent(true)
    }
    if(router.query.event === 'HW Experience Brasil 2023 (São Paulo)'){
      setLinkEvent('https://calendly.com/haymanwoodward/hw-experience-brasil-sao-paulo?month=2023-07')
      setAddress('NOVOTEL SÃO PAULO BERRINI: Rua Henri Dunant, 792 – 04709-110 São Paulo - SP')
      setIsEvent(true)
    }
    if(router.query.event === 'HW Experience Brasil 2023 (Curitiba)'){
      setLinkEvent('https://calendly.com/haymanwoodward/hw-experience-brasil-curitiba?month=2023-07&date=2023-07-19')
      setAddress('NOVOTEL CURITIBA BATEL: Rua Dr. Pedrosa, 288 – 80.420-120 – Curitiba - PR')
      setIsEvent(true)
    }
    if(router.query.event === 'HW Experience Brasil 2023 (Porto Alegre)'){
      setLinkEvent('https://calendly.com/haymanwoodward/hw-experience-brasil-porto-alegre?month=2023-07')
      setAddress('Em breve informaremos o local do evento!')
      setIsEvent(true)
    }
    if(router.query.event === 'HW Experience Brasil 2023 (Rio de Janeiro)'){
      setLinkEvent('https://calendly.com/haymanwoodward/hw-experience-brasil-rio-de-janeiro?month=2023-07&date=2023-07-25')
      setAddress('CEO OFFICES: Av João Cabral de Mello Neto, 850 - BL03 SL1720 - Barra da Tijuca, Rio de Janeiro - RJ')
      setIsEvent(true)
    }
    if(router.query.event === 'HW Experience Brasil 2023 (Brasília)'){
      setLinkEvent('https://calendly.com/haymanwoodward/hw-experience-brasil-brasilia?month=2023-06&date=2023-06-30')
      setAddress('Em breve informaremos o local do evento!')
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
                  {/* <p>{t('complete1')}</p> */}
                  <p className="my-4">{t('complete2')} <Link href={linkEvent} className="text-white fw-bold">{t('complete3')}</Link></p>
                  <p className="my-4">{address}</p>
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
