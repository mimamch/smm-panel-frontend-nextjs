import { getSession, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";

export default function Topbar(props) {
  const isLogin = props.isLogin;

  if (props.isHome) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light homenav">
        {" "}
        <a className="navbar-brand homenavtitle" href="/">
          💕
        </a>
        <button
          className="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto homenavbar-nav">
            {!isLogin && (
              <>
                <li className="nav-item">
                  <Link href="/login">
                    <a className="nav-link">
                      <i className="fas fa-door-open"></i> Masuk
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/register">
                    <a className="nav-link">
                      <i className="fas fa-user-plus"></i> Daftar
                    </a>
                  </Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <Link href="/layanan/daftar-layanan">
                <a className="nav-link">
                  <i className="fas fa-list"></i> Daftar Layanan
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/kontak">
                <a className="nav-link">
                  <i className="fas fa-phone-alt"></i> Kontak Kami
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/syarat-dan-ketentuan">
                <a className="nav-link">
                  <i className="fas fa-copy"></i> Syarat dan Ketentuan
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/faq">
                <a className="nav-link">
                  <i className="fas fa-question"></i> FAQ
                </a>
              </Link>
            </li>
            {isLogin && (
              <>
                <li className="nav-item dropdown no-arrow">
                  <a
                    className="nav-link dropdown-toggle text-gray-900"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-user"></i> {isLogin.username}
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <span className="dropdown-item text-gray-600 disabled">
                      <i className="fas fa-money-bill"></i> Rp.{" "}
                      {isLogin.balance}
                    </span>
                    <Link href="/dashboard">
                      <a className="dropdown-item">
                        <i className="fas fa-tachometer-alt"></i> Dashboard
                      </a>
                    </Link>
                    <Link href="/profile">
                      <a className="dropdown-item">
                        <i className="fas fa-user"></i> Profile
                      </a>
                    </Link>
                    <Link href="/logout">
                      <a className="dropdown-item">
                        <i className="fas fa-door-open"></i> Log Out
                      </a>
                    </Link>
                  </div>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    );
  }

  return (
    <nav className="navbar navbar-expand navbar-light bg-gray-100 topbar mb-4 static-top shadow-sm">
      {/* <!-- Sidebar Toggle (Topbar) --> */}

      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
      >
        <i className="fa fa-bars"></i>
      </button>

      {/* <!-- Topbar Search --> */}

      {/* <!-- Topbar Navbar --> */}
      <ul className="navbar-nav ml-auto">
        {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}

        {isLogin && (
          <>
            {/* <!-- Nav Item - Alerts --> */}
            <li className="nav-item dropdown no-arrow mx-1">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="alertsDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-bell fa-fw"></i>
                {/* <!-- Counter - Alerts --> */}
                <span className="badge badge-danger badge-counter">3+</span>
              </a>
              {/* <!-- Dropdown - Alerts --> */}
              <div
                className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="alertsDropdown"
              >
                <h6 className="dropdown-header">Alerts Center </h6>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="mr-3">
                    <div className="icon-circle bg-dark">
                      <i className="fas fa-file-alt text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div className="small text-gray-500">December 12, 2019</div>
                    <span className="font-weight-bold">
                      A new monthly report is ready to download!
                    </span>
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="mr-3">
                    <div className="icon-circle bg-success">
                      <i className="fas fa-donate text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div className="small text-gray-500">December 7, 2019</div>
                    $290.29 has been deposited into your account!
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="mr-3">
                    <div className="icon-circle bg-warning">
                      <i className="fas fa-exclamation-triangle text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div className="small text-gray-500">December 2, 2019</div>
                    Spending Alert: We've noticed unusually high spending for
                    your account.
                  </div>
                </a>
                <a
                  className="dropdown-item text-center small text-gray-500"
                  href="#"
                >
                  Show All Alerts
                </a>
              </div>
            </li>

            {/* <!-- Nav Item - Messages --> */}

            <div className="topbar-divider"></div>
            <li className="nav-item dropdown no-arrow mx-3 my-auto">
              <div className="justify-content-center align-items-center row">
                {/* <!-- Counter - Alerts --> */}
                <i className="fas fa-money-bill-wave "></i>
                <span className="ml-1 ">Rp. {isLogin.balance}</span>
              </div>
            </li>
          </>
        )}

        {/* <!-- Nav Item - User Information --> */}
        {isLogin ? (
          <li className="nav-item dropdown no-arrow">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                {isLogin.username}
              </span>
              <img
                className="img-profile rounded-circle"
                src="/assets/img/undraw_profile.svg"
              />
            </a>
            {/* <!-- Dropdown - User Information --> */}
            <div
              className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown"
            >
              <a className="dropdown-item" href="/dashboard/profile">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Profile
              </a>
              <a className="dropdown-item" href="/dashboard">
                <i className="fas fa-tachometer-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Dashboard
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                Activity Log
              </a>
              <div className="dropdown-divider"></div>
              <a onClick={signOut} className="dropdown-item" href="#">
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
              </a>
            </div>
          </li>
        ) : (
          <li className="nav-item align-items-center row mx-3">
            <a href="/login" className="btn btn-dark btn-sm btn-icon-split">
              <span className="icon text-gray-600">
                <i className="fas fa-sign-in-alt"></i>
              </span>
              <span className="text">Masuk</span>
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
