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
  const [email, setEmail] = useState("");
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
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/send-forgot-email`,
        {
          email,
        }
      );
      Swal.close();
      Swal.fire({
        icon: "success",
        text: send.data.msg,
      });
      setCookie(null, "verid", send.data.id, {
        maxAge: 600, // 10 minutes,
        path: "/",
      });
      setCookie(null, "vermail", email, {
        maxAge: 600, // 10 minutes,
        path: "/",
      });
      router.push("/forgot/1");
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: error.response.data.msg || error.message,
      });
    }
  };

  function load() {
    const cookies = parseCookies();
    if (cookies.verid) return router.push("/forgot/1");
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
                          MASUKAN EMAIL AKUN ANDA
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
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Masukkan Email"
                            autoCapitalize="off"
                            name="username"
                          />
                        </div>

                        <button
                          type="submit"
                          className="btn btn-dark btn-user btn-block"
                        >
                          Kirim Kode Verifikasi
                        </button>
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
