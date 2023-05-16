
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '@/styles/Sponsors.module.scss'

import Image from 'next/image'
import s1 from '../public/s1.webp'
import s2 from '../public/s2.webp'
import s3 from '../public/s3.webp'
import s4 from '../public/s4.webp'
import s5 from '../public/s5.webp'

import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

export default function Sponsors() {

    const { t, lang } = useTranslation('common')
    const router = useRouter()
    const { locale } = router

    return (
        <>
            <div className={styles.sponsors} id='sponsors'>
                <div className='container'>
                    <div className='row text-center text-md-start'>
                        <div className='col-md-4 d-flex align-items-center'>
                            <div>
                                <span>{t('sponsorTitle2')}</span>
                                <h3>{t('sponsorTitle1')}</h3>
                            </div>
                        </div>
                        <div className='col-md-8'>
                            <Swiper
                                modules={[Autoplay, Navigation, Pagination]}
                                spaceBetween={50}
                                slidesPerView={2}
                                // centeredSlides={true}
                                // autoplay={{
                                //   delay: 2500,
                                //   disableOnInteraction: false,
                                // }}
                                pagination={{
                                    clickable: true,
                                }}
                                // className={styles.Swiper}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 40,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 50,
                                    },
                                }}
                            >
                                <SwiperSlide>
                                    <div className={styles.theSpeaker}>
                                        <Image src={s2} alt="Sponsors Hayman-Woodward" quality='100' className={styles.spk + ' w-100 rounded'} />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={styles.theSpeaker}>
                                        <Image src={s3} alt="Sponsors Hayman-Woodward" quality='100' className={styles.spk + ' w-100 rounded'} />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={styles.theSpeaker}>
                                        <Image src={s4} alt="Sponsors Hayman-Woodward" quality='100' className={styles.spk + ' w-100 rounded'} />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={styles.theSpeaker}>
                                        <Image src={s5} alt="Sponsors Hayman-Woodward" quality='100' className={styles.spk + ' w-100 rounded'} />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
