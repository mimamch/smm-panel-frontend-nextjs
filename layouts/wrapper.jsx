import Head from "next/head";
import React, { useEffect } from "react";
import Script from "next/script";
import Link from "next/link";
import useScript from "./useScript";
import Js from "./js";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import Footer from "./footer";
// import $ from "startbootstrap-sb-admin-2/vendor/jquery/jquery.min";
// import * as $ from "jquery";
// import "startbootstrap-sb-admin-2/vendor/bootstrap/js/bootstrap.bundle.min.js";
// import "startbootstrap-sb-admin-2/js/sb-admin-2.min";

export default function Wrapper(props) {
  const isLogin = props.isLogin ?? true;

  return (
    <>
      <div id="wrapper">
        {/* <!-- Sidebar --> */}
        {!props.hideNavbar && <Sidebar isLogin={isLogin} />}
        {/* <!-- End of Sidebar --> */}
        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            {/* <!-- Topbar --> */}
            <Topbar isLogin={isLogin} />
            {/* <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}
            {props.children}
            {/* <!-- /.container-fluid --> */}
          </div>
          {/* <!-- End of Main Content --> */}

          {/* <!-- Footer --> */}
          <Footer />
          {/* <!-- End of Footer --> */}
        </div>
        {/* <!-- End of Content Wrapper --> */}
      </div>
      <Js />
    </>
  );
}
