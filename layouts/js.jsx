import React from "react";
import Script from "next/script";

export default function Js() {
  return (
    <>
      <Script src="/vendor/jquery/jquery.min.js" strategy="beforeInteractive" />
      <Script
        src="/vendor/bootstrap/js/bootstrap.bundle.min.js"
        strategy="beforeInteractive"
      />

      <Script
        src="/vendor/jquery-easing/jquery.easing.min.js"
        strategy="beforeInteractive"
      />

      {/* <!-- Custom scripts for all pages--> */}
      <Script src="/js/sb-admin-2.js" />
    </>
  );
}
