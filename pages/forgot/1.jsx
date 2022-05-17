import axios from "axios";
import { Children, useState, useEffect } from "react";
import Swal from "sweetalert2";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";

export default function Login({ csrfToken }) {
  const session = useSession();
  const [code, setCode] = useState("");
  const [verid, setVerid] = useState("");
  const router = useRouter();
  const forgot = async (e) => {
    e.preventDefault();
    try {
      Swal.fire({
        title: "Sedang Mengirim...",
        html: "Mohon Bersabar 😇<br/> Jangan Keluar Dari Halaman Ini! ⛔",
        allowOutsideClick: false,
        allowEscapeKey: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      const send = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/check-verification-code`,
        {
          code,
          id: verid,
        }
      );
      Swal.close();
      Swal.fire({
        icon: "success",
        text: send.data.msg,
      });
      //   setCookie(null, "verid", send.data.id, {
      //     maxAge: 300000, // 3 minutes,
      //   });
      router.push("/forgot/2");
    } catch (error) {
      setCode("");
      Swal.fire({
        icon: "error",
        text: error.response.data.msg || error.message,
      });
    }
  };

  const sendAgain = async (e) => {
    e.preventDefault();
    const cookies = parseCookies();
    if (!cookies.vermail) return router.push("/forgot");
    try {
      Swal.fire({
        title: "Sedang Mengirim...",
        html: "Mohon Bersabar 😇<br/> Jangan Keluar Dari Halaman Ini! ⛔",
        allowOutsideClick: false,
        allowEscapeKey: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      const send = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/send-forgot-email`,
        {
          email: cookies.vermail,
        }
      );
      Swal.close();
      Swal.fire({
        icon: "success",
        text: send.data.msg,
      });
      setVerid(send.data.id);
      setCookie(null, "verid", send.data.id, {
        maxAge: 600, // 10 minutes,
        path: "/",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: error.message,
      });
    }
  };

  function load() {
    const cookies = parseCookies();
    if (!cookies.verid) {
      return router.push("/forgot");
    }
    setVerid(cookies.verid);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <>
      <div className="container">
        <Head>
          <title>Lupa Kata Sandi</title>
        </Head>
        {/* <!-- Outer Row --> */}
        <div
          style={{ minHeight: "100vh" }}
          className="row justify-content-center "
        >
          <div className="col-sm-12 col-md-6 col-xl-6 my-auto">
            <div className="card o-hidden border-0 shadow-sm ">
              <div className="card-body p-0">
                <Link href="/">
                  <a className="btn btn-dark btn-icon-split">
                    <span className="icon text-gray-600 btn-sm ">
                      <i className="fas fa-home text-gray-200"></i>
                    </span>
                  </a>
                </Link>
                {/* <!-- Nested Row within Card Body --> */}
                <div className="row">
                  {/* <div className="col-lg-6 d-none d-lg-block bg-login-image"></div> */}
                  <div className="col-12">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4 font-weight-bold">
                          Masukkan Kode Verifikasi Dari Email Anda
                        </h1>
                      </div>
                      <form
                        className="user"
                        onSubmit={forgot}
                        // method="post"
                        // action="/api/auth/callback/credentials"
                      >
                        <input
                          name="csrfToken"
                          type="hidden"
                          defaultValue={csrfToken}
                        />
                        <div className="form-group">
                          <input
                            onChange={(e) => setCode(e.target.value)}
                            type="text"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Kode Verifikasi"
                            autoCapitalize="off"
                            name="code"
                            value={code}
                          />
                        </div>

                        <button
                          type="submit"
                          className="btn btn-dark btn-user btn-block"
                        >
                          Kirim
                        </button>
                        <hr />
                        <div className="row justify-content-center">
                          {" "}
                          <div className="text-center col-6">
                            <a onClick={sendAgain} className="small" href="#">
                              Belum Menerima Kode? Kirim Ulang
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
