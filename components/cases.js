import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Fade from 'react-reveal/Fade';

import styles from '@/styles/Cases.module.scss'

import Link from 'next/link'
import Image from 'next/image'
import case01 from '../public/case01.webp'
import case02 from '../public/case02.webp'
import case03 from '../public/case03.webp'
import case04 from '../public/case04.webp'
import case05 from '../public/case05.webp'
import case06 from '../public/case06.webp'
import case07 from '../public/case07.webp'
import case08 from '../public/case08.webp'
import case09 from '../public/case09.webp'
import case10 from '../public/case10.webp'

import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

export default function Cases({url}) {

  const { t, lang } = useTranslation('common')
  const router = useRouter()
  const { locale } = router 

  return (
    <>
      <div className={styles.cases}>
        <div className='container'>
          <div className='row justify-content-start text-center text-md-start'>
            <div className='col-md-10 offset-md-2 text-center text-md-end'>
              <Fade bottom>
                <h4>{t('casesTitle2')}</h4>
              </Fade>
              <Fade bottom>
                <h3 className={styles.title}>{t('casesTitle1')}</h3>
              </Fade>
              <Fade bottom>
                <p>{t('casesP')}</p>
              </Fade>
            </div>

            <div>
              <div className='row'>
                  <div className='col-md-12'>
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        spaceBetween={50}
                        slidesPerView={1}
                        centeredSlides={false}
                        loop={true}
                        // autoplay={{
                        //   delay: 2500,
                        //   disableOnInteraction: false,
                        // }}
                        pagination={{
                          clickable: true,
                        }}
                        className={styles.CasesSwiper}
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                        }}
                    >
                                              <SwiperSlide>
                            <div className={styles.theCase}>
                                <Image src={case07} alt="Casos de éxito" quality='100' className={styles.imageCases + 'w-100 img-fluid rounded'}/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.theCase}>
                                <Image src={case08} alt="Casos de éxito" quality='100' className={styles.imageCases + 'w-100 img-fluid rounded'}/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.theCase}>
                                <Image src={case09} alt="Casos de éxito" quality='100' className={styles.imageCases + 'w-100 img-fluid rounded'}/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.theCase}>
                                <Image src={case10} alt="Casos de éxito" quality='100' className={styles.imageCases + 'w-100 img-fluid rounded'}/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.theCase}>
                                <Image src={case01} alt="Casos de éxito" quality='100' className={styles.imageCases + 'w-100 img-fluid rounded'}/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.theCase}>
                                <Image src={case02} alt="Casos de éxito" quality='100' className={styles.imageCases + 'w-100 img-fluid rounded'}/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.theCase}>
                                <Image src={case03} alt="Casos de éxito" quality='100' className={styles.imageCases + 'w-100 img-fluid rounded'}/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.theCase}>
                                <Image src={case04} alt="Casos de éxito" quality='100' className={styles.imageCases + 'w-100 img-fluid rounded'}/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.theCase}>
                                <Image src={case05} alt="Casos de éxito" quality='100' className={styles.imageCases + 'w-100 img-fluid rounded'}/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.theCase}>
                                <Image src={case06} alt="Casos de éxito" quality='100' className={styles.imageCases + 'w-100 img-fluid rounded'}/>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                  </div>
              </div>
              <Fade bottom>
              <Link href={`/`+locale+`/`+url+`/signup`} className={styles.cta} >{t('exclusiveCta')}</Link>
              </Fade>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
