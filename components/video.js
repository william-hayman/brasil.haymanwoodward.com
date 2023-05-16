import React, {useEffect, useState} from "react";
import Link from "next/link";
import styles from '@/styles/Video.module.scss'

import YouTube from 'react-youtube';

export default function Video({title}) {

  return (
    <>

      <div className={styles.video}>
        <div className='container'>
          <div className='row text-center justify-content-center'>
          <div className='col-md-12 title mb-3'>
              <h4>{title}</h4>
            </div>
            <div className='col-md-8 mb-5 embed-responsive embed-responsive-16by9'>
            <YouTube videoId="y4Gi8aGVves" opts={{width: '100%'}} className={'embed-responsive embed-responsive-16by9'} iframeClassName={styles.videoIframe + ' embed-responsive-item'}/>
            </div>            
          </div>
        </div>
      </div>

    </>
  )
}
