import Head from "next/head";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.scss";
import Countdown from "@/components/countdown";
import Cta from "@/components/cta";
import About from "@/components/about";
import Speakers from "@/components/speakers";
import Sponsors from "@/components/sponsors";
import Questions from "@/components/questions";
import Cases from "@/components/cases";

import Layout from "@/components/layout";

import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

export default function Home() {
  const { t, lang } = useTranslation("common");
  const url = "webinar";
  const eventHour = "19h00";

  return (
    <>
      <Head>
        <title>HAYMAN-WOODWARD - {t("exclusiveIn")}</title>
        <meta name="description" content={t("ctaTitle1")} />
        <meta
          property="og:title"
          content={`HAYMAN-WOODWARD - ` + t("exclusiveIn")}
        />
        <meta property="og:description" content={t("ctaTitle1")} />
        <meta property="og:url" content="https://brasil.haymanwoodward.com" />
        <meta property="og:image:height" content="1005" />
        <meta property="og:image:width" content="1920" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dkrpbdexy/image/upload/v1677596226/Hayman-Woodward/og-image_fazdj9.png"
        />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#c99f32" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Script
        id="gtag-manager-head"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
          
          `,
        }}
      />
      <Script
        id="jquery-bugfix"
        strategy="lazyOnload"
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossorigin="anonymous"
      />
      <Script
        id="ze-snippet"
        src="https://static.zdassets.com/ekr/snippet.js?key=4cafa407-b6a9-4bfd-9b4b-10a7b43b212a"
      />

      <Cta
        url={url}
        localeId={t("locale")}
        eventDate={t("may30")}
        eventType={t("webinar")}
        eventHour={eventHour}
      />
      <Countdown deadline="2023-06-20 20:00" url={url} />
      <About url={url} />
      <Cases url={url} />
      <Sponsors />
      <Questions />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  const { props } = page;
  return <Layout url="webinar">{page}</Layout>;
};
