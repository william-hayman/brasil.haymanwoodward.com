import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          id='gtag-manager-head'
          strategy='lazyOnload'
          dangerouslySetInnerHTML={{
            __html: `

            // GOOGLE TAG MANAGER
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KS3LQ3R');

            // PIXEL FACEBOOK
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '3273630849587112');
            fbq('track', 'PageView');

            // HOTJAR


            // Microsoft Clarity
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ha5aiozeou");
            `,
          }}
        />
      </Head>
      <body>
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KS3LQ3R" height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
        <noscript dangerouslySetInnerHTML={{ __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=3273630849587112&ev=PageView&noscript=1"/>`}}></noscript>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11140501780" strategy="afterInteractive" />
        <Script
          id='gtag-manager-head'
          strategy='lazyOnload'
          dangerouslySetInnerHTML={{
            __html: `
            // ADS GOOGLE
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-11140501780');
            `,
          }}
        />


        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
