import React from "react";
import Script from "next/script";

export default function Js() {
  return (
    <>
      <Script
        src="/assets/vendor/jquery/jquery.min.js"
        strategy="beforeInteractive"
      />
      <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" />

      <Script src="/assets/vendor/jquery-easing/jquery.easing.min.js" />

      {/* <!-- Custom scripts for all pages--> */}
      <Script src="/assets/js/sb-admin-2.min.js" />
    </>
  );
}
