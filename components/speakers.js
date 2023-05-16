
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '@/styles/Speakers.module.scss'

import Image from 'next/image'
import sp1 from '../public/speaker01.webp'
import sp2 from '../public/speaker02.webp'
import sp3 from '../public/speaker03.webp'
import sp4 from '../public/speaker04.webp'
import sp5 from '../public/speaker02.webp'

export default function Complete() {

  return (
    <>
      <div className={styles.speakers} id='speakers'>
        <div className='container'>
            <div className='row text-center text-md-start'>
                <div className='col-md-12'>
                    <span>Experts on the subject</span>
                    <h3>Our speakers</h3>
                    <p>The event is unique and the speakers are highly qualified worldwide with the best immigration for their mobility.</p>
                </div>
            </div>
            <div className='row text-center text-md-start'>
                <div className='col-md-12'>
                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
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
                            <Image src={sp1} alt="Leonardo Freitas" className={styles.spk + ' w-100 rounded'}/>
                            <span>Managing Director</span>
                            <h4>Leonardo Freitas</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.theSpeaker}>
                        <Image src={sp2} alt="Nazli Di̇nçma" className={styles.spk + ' w-100 rounded'}/>
                            <span>Business Development Coordinator</span>
                            <h4>Nazli Di̇nçma</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.theSpeaker}>
                        <Image src={sp3} alt="Leonardo Freitas" className={styles.spk + ' w-100 rounded'}/>
                            <span>Global Vice President Sales and Business</span>
                            <h4>Volkan Pekiner</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.theSpeaker}>
                            <Image src={sp4} alt="Rodrigue Akl" className={styles.spk + ' w-100 rounded'}/>
                            <span>Business Developer</span>
                            <h4>Rodrigue Akl</h4>
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
