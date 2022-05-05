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
  // useScript("/vendor/jquery/jquery.min.js");
  // useScript("/vendor/bootstrap/js/bootstrap.bundle.min.js");
  // useScript("/vendor/jquery-easing/jquery.easing.min.js");
  // useScript("/js/sb-admin-2.js");
  // useEffect(() => {
  //   ("use strict"); // Start of use strict
  //   // Toggle the side navigation
  //   $("#sidebarToggle, #sidebarToggleTop").on("click", function (e) {
  //     $("body").toggleClass("sidebar-toggled");
  //     $(".sidebar").toggleClass("toggled");
  //     if ($(".sidebar").hasClass("toggled")) {
  //       $(".sidebar .collapse").collapse("hide");
  //     }
  //   });

  //   // Close any open menu accordions when window is resized below 768px
  //   $(window).resize(function () {
  //     if ($(window).width() < 768) {
  //       $(".sidebar .collapse").collapse("hide");
  //     }

  //     // Toggle the side navigation when window is resized below 480px
  //     if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
  //       $("body").addClass("sidebar-toggled");
  //       $(".sidebar").addClass("toggled");
  //       $(".sidebar .collapse").collapse("hide");
  //     }
  //   });

  //   // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  //   $("body.fixed-nav .sidebar").on(
  //     "mousewheel DOMMouseScroll wheel",
  //     function (e) {
  //       if ($(window).width() > 768) {
  //         var e0 = e.originalEvent,
  //           delta = e0.wheelDelta || -e0.detail;
  //         this.scrollTop += (delta < 0 ? 1 : -1) * 30;
  //         e.preventDefault();
  //       }
  //     }
  //   );

  //   // Scroll to top button appear
  //   $(document).on("scroll", function () {
  //     var scrollDistance = $(this).scrollTop();
  //     if (scrollDistance > 100) {
  //       $(".scroll-to-top").fadeIn();
  //     } else {
  //       $(".scroll-to-top").fadeOut();
  //     }
  //   });

  //   // Smooth scrolling using jQuery easing
  //   $(document).on("click", "a.scroll-to-top", function (e) {
  //     var $anchor = $(this);
  //     $("html, body")
  //       .stop()
  //       .animate(
  //         {
  //           scrollTop: $($anchor.attr("href")).offset().top,
  //         },
  //         1000,
  //         "easeInOutExpo"
  //       );
  //     e.preventDefault();
  //   });
  // }, []);

  return (
    <>
      <div id="wrapper">
        {/* <!-- Sidebar --> */}
        <Sidebar />
        {/* <!-- End of Sidebar --> */}
        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            {/* <!-- Topbar --> */}
            <Topbar />
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
