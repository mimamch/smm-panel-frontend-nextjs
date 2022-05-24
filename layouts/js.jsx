import Script from "next/script";

export default function Js(props) {
  return (
    <>
      <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" />

      {!props.isHome && (
        <Script src="/assets/js/sb-admin-2.js" strategy="lazyOnload" />
      )}

      <Script src="/assets/vendor/jquery-easing/jquery.easing.min.js" />

      {/* <!-- Custom scripts for all pages--> */}
    </>
  );
}
