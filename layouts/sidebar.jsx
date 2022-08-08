import Link from "next/link";

export default function Sidebar(props) {
  const isLogin = props.isLogin;

  // SIDEBAR IF NOT LOGGED IN
  // if (!isLogin) {
  //   return (
  //     <ul
  //       className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion toggled"
  //       id="accordionSidebar"
  //     >
  //       {/* <!-- Sidebar - Brand --> */}
  //       <a
  //         className="sidebar-brand d-flex align-items-center justify-content-center"
  //         href="/"
  //       >
  //         <div className="sidebar-brand-icon ">
  //           <i className="fas fa-heart"></i>
  //         </div>
  //         <div className="sidebar-brand-text mx-3">Layanan Sosial Media</div>
  //       </a>

  //       {/* <!-- Divider --> */}
  //       <hr className="sidebar-divider my-0" />

  //       {/* <!-- Nav Item - Charts --> */}
  //       <li className="nav-item">
  //         <a className="nav-link" href="/login">
  //           <i className="fas fa-door-open"></i>
  //           <span>Masuk</span>
  //         </a>
  //       </li>
  //       <li className="nav-item">
  //         <a className="nav-link" href="/register">
  //           <i className="fas fa-user"></i>
  //           <span> Daftar</span>
  //         </a>
  //       </li>
  //       <hr className="sidebar-divider my-0" />
  //       {/* <!-- Nav Item - Pages Collapse Menu --> */}
  //       <li className="nav-item">
  //         <a className="nav-link" href="/login">
  //           <i className="fas fa-list"></i>
  //           <span>Daftar Layanan</span>
  //         </a>
  //       </li>
  //       {/* <li className="nav-item">
  //         <a
  //           className="nav-link collapsed"
  //           href="#"
  //           data-toggle="collapse"
  //           data-target="#collapsePages"
  //           aria-expanded="true"
  //           aria-controls="collapsePages"
  //         >
  //           <i className="fas fa-fw fa-folder"></i>
  //           <span>Pages</span>
  //         </a>
  //         <div
  //           id="collapsePages"
  //           className="collapse"
  //           aria-labelledby="headingPages"
  //           data-parent="#accordionSidebar"
  //         >
  //           <div className="bg-white py-2 collapse-inner rounded">
  //             <h6 className="collapse-header">Login Screens:</h6>
  //             <a className="collapse-item" href="login.html">
  //               Login
  //             </a>
  //             <a className="collapse-item" href="register.html">
  //               Register
  //             </a>
  //             <a className="collapse-item" href="forgot-password.html">
  //               Forgot Password
  //             </a>
  //             <div className="collapse-divider"></div>
  //             <h6 className="collapse-header">Other Pages:</h6>
  //             <a className="collapse-item" href="404.html">
  //               404 Page
  //             </a>
  //             <a className="collapse-item" href="blank.html">
  //               Blank Page
  //             </a>
  //           </div>
  //         </div>
  //       </li> */}

  //       {/* <!-- Nav Item - Tables --> */}
  //       <li className="nav-item">
  //         <a className="nav-link" href="tables.html">
  //           <i className="fas fa-phone"></i>
  //           <span>Kontak</span>
  //         </a>
  //       </li>

  //       {/* <!-- Divider --> */}
  //       <hr className="sidebar-divider d-none d-md-block" />

  //       {/* <!-- Sidebar Toggler (Sidebar) --> */}
  //       <div className="text-center d-none d-md-inline">
  //         <button
  //           className="rounded-circle border-0"
  //           id="sidebarToggle"
  //         ></button>
  //       </div>

  //       {/* <!-- Sidebar Message --> */}
  //     </ul>
  //   );
  // }

  return (
    <ul
      className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion toggled"
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      <Link href="/">
        <a className="sidebar-brand d-flex align-items-center justify-content-center">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-heart-broken"></i>
          </div>
          <div className="sidebar-brand-text mx-3">Halo 👋</div>
        </a>
      </Link>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}

      <li className="nav-item active">
        <Link href="/dashboard">
          <a className="nav-link" href="/dashboard">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </Link>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">MENU</div>

      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      {isLogin && (
        <>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i className="fas fa-file-invoice-dollar"></i>
              <span>Pesanan</span>
            </a>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Pesanan:</h6>
                <Link href="/layanan/baru">
                  <a href="/layanan/baru" className="collapse-item">
                    <i className="fas fa-plus"></i> Buat Pesanan
                  </a>
                </Link>
                <Link href="/layanan/riwayat">
                  <a className="collapse-item">
                    <i className="fas fa-history"></i> Riwayat Pesanan
                  </a>
                </Link>

                <Link href="/layanan/daftar-layanan">
                  <a className="collapse-item" href="/layanan/daftar-layanan">
                    <i className="fas fa-list"></i> Daftar Layanan
                  </a>
                </Link>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#Deposit"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i className="fas fa-money-bill"></i>
              <span>Deposit</span>
            </a>
            <div
              id="Deposit"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Deposit:</h6>

                <Link href="/deposit/baru">
                  <a href="/deposit/baru" className="collapse-item">
                    <i className="fas fa-plus"></i> Isi Saldo
                  </a>
                </Link>
                <Link href="/deposit/riwayat">
                  <a className="collapse-item" href="/deposit/riwayat">
                    <i className="fas fa-history"></i> Riwayat Deposit
                  </a>
                </Link>
              </div>
            </div>
          </li>
        </>
      )}
      {/* <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#tiket"
          aria-expanded="true"
          aria-controls="collapseThree"
          id="tiketparent"
        >
          <i className="fas fa-envelope"></i>
          <span>Tiket</span>
        </a>
        <div
          id="tiket"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Tiket:</h6>

            <a href="/tiket/baru" className="collapse-item">
              <i className="fas fa-plus"></i> Tiket Baru
            </a>
            <a className="collapse-item" href="/tiket/riwayat">
              <i className="fas fa-history"></i> Riwayat Tiket
            </a>
          </div>
        </div>
      </li> */}
      <li className="nav-item">
        <Link href="/kontak">
          <a className="nav-link" href="/kontak">
            <i className="fas fa-phone"></i>
            <span>Kontak</span>
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/layanan/daftar-layanan">
          <a className="nav-link" href="/layanan/daftar-layanan">
            <i className="fas fa-list"></i>
            <span>Daftar Layanan</span>
          </a>
        </Link>
      </li>
      {/* <!-- Nav Item - Utilities Collapse Menu --> */}

      {/* <!-- Divider --> */}

      {/* <!-- Divider --> */}
      {/* <hr className="sidebar-divider d-none d-md-block" /> */}
      {isLogin.role == "admin" && (
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#admin"
            aria-expanded="true"
            aria-controls="collapsefour"
          >
            <i className="fas fa-lock"></i>
            <span>Admin</span>
          </a>
          <div
            id="admin"
            className="collapse"
            aria-labelledby="headingfour"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Admin Menu:</h6>

              <Link href="/admin/user">
                <a href="/admin/user" className="collapse-item">
                  <i className="fas fa-plus"></i> Daftar User
                </a>
              </Link>
              <Link href="/admin/deposit">
                <a className="collapse-item" href="/admin/deposit">
                  <i className="fas fa-history"></i> Daftar Deposit
                </a>
              </Link>

              <Link href="/admin/history">
                <a className="collapse-item" href="/admin/history">
                  <i className="fas fa-history"></i> History Pesanan
                </a>
              </Link>
              <Link href="/admin/announcements">
                <a className="collapse-item" href="/admin/announcements">
                  <i className="fas fa-history"></i> Pengumuman
                </a>
              </Link>
            </div>
          </div>
        </li>
      )}
      <hr className="sidebar-divider d-none d-md-block" />
      {/* <!-- Sidebar Toggler (Sidebar) --> */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

      {/* <!-- Sidebar Message --> */}
    </ul>
  );
}
