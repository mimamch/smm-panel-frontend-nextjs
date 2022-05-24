import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* META TAG */}
        {/* <!-- Primary Meta Tags --> */}

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smm.mimamch.online" />
        <meta
          property="og:title"
          content="SMM Panel Termurah Seindonesia - NUSANTARA SMM"
        />
        <meta
          property="og:description"
          content="Panel SMM Termurah, Tercepat, Terpercaya di Indonesia. Memberikan pelayanan terbaik untuk pengguna Sosial Media. Dengan Bonus Deposit Hingga 10% Untuk Pengguna Baru, Daftar Sekarang!"
        />
        <meta
          property="og:image"
          content="https://smm.mimamch.online/assets/img/meta-logo.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://smm.mimamch.online" />
        <meta
          property="twitter:title"
          content="SMM Panel Termurah Seindonesia - NUSANTARA SMM"
        />
        <meta
          property="twitter:description"
          content="Panel SMM Termurah, Tercepat, Terpercaya di Indonesia. Memberikan pelayanan terbaik untuk pengguna Sosial Media. Dengan Bonus Deposit Hingga 10% Untuk Pengguna Baru, Daftar Sekarang!"
        />
        <meta
          property="twitter:image"
          content="https://smm.mimamch.online/assets/img/meta-logo.png"
        />

        {/* END META TAG */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
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
        <script
          src="/assets/vendor/jquery/jquery.min.js"
          strategy="beforeInteractive"
        />
      </Head>
      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
