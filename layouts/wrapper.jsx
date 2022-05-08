import React, { useEffect, useState } from "react";
import Js from "./js";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import Footer from "./footer";
import { getSession } from "next-auth/react";

export default function Wrapper(props) {
  const [user, setUser] = useState(false);
  const isLogin = user ?? props.isLogin;

  useEffect(() => {
    (async () => {
      const session = await getSession();
      if (session) setUser(session.user);
    })();
  }, []);

  return (
    <>
      <div id="wrapper">
        {/* <!-- Sidebar --> */}
        {!props.hideSidebar && <Sidebar isLogin={isLogin} />}
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
