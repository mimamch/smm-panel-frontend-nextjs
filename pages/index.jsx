import Head from "next/head";
import Wrapper from "../layouts/wrapper";
import Link from "next/link";
import { getSession } from "next-auth/react";

export const getServerSideProps = async (ctx) => {
  try {
    const props = await getSession(ctx);
    if (!props)
      return {
        props: {},
      };

    return {
      props: {
        isLogin: props.user,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
};
export default function Home(props) {
  const isLogin = props.isLogin;

  return (
    <>
      <Head>
        <title>SMM Panel Termurah Se-Indonesia - NUSANTARA SMM</title>
        <meta
          key="title"
          name="title"
          content="SMM Panel Termurah Seindonesia - NUSANTARA SMM"
        />
        <meta
          key="description"
          name="description"
          content="Panel SMM Termurah, Tercepat, Terpercaya di Indonesia. Memberikan pelayanan terbaik untuk pengguna Sosial Media. Dengan Bonus Deposit Hingga 10% Untuk Pengguna Baru, Daftar Sekarang!"
        />
      </Head>
      <Wrapper hideSidebar={true} isHome>
        <section>
          <div className="container-fluid">
            <div className="row mt-7">
              <div className="col-lg-9 text-center align-items-center justify-content-center mx-auto">
                <h1
                  className=" headingTitle text-gray-800 text-gradient"
                  data-aos="slide-down"
                >
                  NUSANTARA SMM
                </h1>
                <ul className="list-unstyled heading-text">
                  <li>SMM Termurah Se-Indonesia 😍</li>
                  <li>Server Tercepat Di Indonesia 💕</li>
                  <li>Telah Dipercaya oleh ribuan orang 😎</li>
                </ul>
                <div className="row justify-content-center align-items-center">
                  {!isLogin ? (
                    <>
                      <Link href="/login">
                        <a
                          data-aos="slide-right"
                          className="btn btn-dark btn-lg  btn-icon-split m-2 "
                        >
                          <span className="icon text-gray-600">
                            <i className="fas fa-sign-in-alt text-gray-200"></i>
                          </span>
                          <span className="text">Masuk</span>
                        </a>
                      </Link>
                      <Link href="/register">
                        <a
                          data-aos="slide-left"
                          className="btn btn-primary  btn-icon-split btn-lg m-2"
                        >
                          <span className="icon text-gray-600">
                            <i className="fas fa-users text-gray-200"></i>
                          </span>
                          <span className="text">Daftar</span>
                        </a>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link href="/dashboard">
                        <a className="btn btn-primary  btn-icon-split btn-lg m-2">
                          <span className="icon text-gray-600">
                            <i className="fas fa-users text-gray-200"></i>
                          </span>
                          <span className="text">Dashboard</span>
                        </a>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-lg-5">
          <div className="container">
            <div className="row text-gray-700 " data-aos="fade-up">
              <div className="col-lg-8 offset-lg-2 overview-box">
                <div className="facts-box text-center">
                  <div className="row">
                    <div className="col-md py-3 text-center">
                      <span className="h2 font-weight-bold">50.262+</span>
                      <p className=" mt-2 mb-0 text-gray-600">Pengguna Aktif</p>
                    </div>
                    <div className="col-md py-3">
                      <span className="h2 font-weight-bold">156.586+</span>
                      <p className=" mt-2 mb-0 text-gray-600">
                        Pesanan Dikerjakan
                      </p>
                    </div>
                    <div className="col-md py-3">
                      <span className="h2 font-weight-bold">517+</span>
                      <p className=" mt-2 mb-0 text-gray-600">Layanan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="mt-5 mb-5" />
        <section className="section py-lg-5">
          <div className="container">
            <div className="row text-gray-700" data-aos="zoom-in-down">
              <div className="col-sm">
                <div className="features-box text-center">
                  <div className="feature-icon">
                    <i className="fas fa-gem"></i>
                  </div>
                  <h3>Kualitas Layanan</h3>
                  <p>
                    Kami menyediakan berbagai layanan terbaik dan berkualitas
                    untuk menaikkan peringkat social media Anda.
                  </p>
                </div>
              </div>
              <div className="col-sm">
                <div className="features-box text-center">
                  <div className="feature-icon">
                    <i className="fas fa-life-ring"></i>
                  </div>
                  <h3>Pelayanan Bantuan</h3>
                  <p>
                    Kami siap membantu Anda jika Anda mengalami kesulitan atau
                    tidak mengerti terkait layanan yang kami sediakan.
                  </p>
                </div>
              </div>
              <div className="col-sm">
                <div className="features-box text-center">
                  <div className="feature-icon">
                    <i className="fas fa-code"></i>
                  </div>
                  <h3>Kenyamanan Desain</h3>
                  <p>
                    Website kami dapat diakses melalui berbagai device/perangkat
                    baik PC, tablet, maupun mobile phone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section className="section mt-5 mb-5 py-lg-5" id="faqs">
          <div className="container">
            <div className="row text-center" data-aos="slide-left">
              <div className="col-sm-12">
                <h2 className="title text-gray-800">Pertanyaan Umum</h2>
                <p className="title-alt">
                  Berikut telah kami rangkum beberapa pertanyaan yang sering
                  ditanyakan pelanggan terkait layanan kami.
                </p>
                <div className="row text-center px-3 mt-4">
                  <div className="col-sm-6">
                    <div className="question-box mb-4">
                      <h4 className="text-center text-gray-700">
                        Apa itu Smm Panel Indonesia?
                      </h4>
                      <p className="">
                        SMM Panel adalah singkatan dari panel sosial media
                        marketing. Di website SMM Panel dengan layanan
                        Followers, Like, View, DLL.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="question-box mb-4">
                      <h4 className="text-gray-700">
                        Apa keuntungan bergabung dengan Kami?
                      </h4>
                      <p>
                        Keuntungan bergabung bersama smm agen anda akan
                        mendapatkan harga murah untuk semua layanan yang kami
                        berikan di website.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="question-box mb-4">
                      <h4 className="text-gray-700">
                        Apakah bisa menjual layanan kepada orang lain?
                      </h4>
                      <p>
                        Tentu bisa. Anda dapat menjadi reseller atau menjual
                        kembali layanan yang kami sediakan di website. Anda
                        dapat menjadi penyedia layanan sosial media.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="question-box mb-4">
                      <h4 className="text-gray-700">
                        Berapa biaya untuk mendaftar?
                      </h4>
                      <p>
                        Gratis! Kami tidak membebankan biaya pendaftaran untuk
                        smm panel. Anda hanya akan membayar ketika anda
                        melakukan pemesanan saja.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
}
