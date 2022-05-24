import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

export default function Login() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [verid, setVerid] = useState("");
  const router = useRouter();
  const forgot = async (e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      return Swal.fire({
        icon: "error",
        text: "Password dan Konfirmasi Password Tidak Sama!",
      });
    }
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
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/create-new-password`,
        {
          password,
          id: verid,
        }
      );
      Swal.close();
      Swal.fire({
        icon: "success",
        text: send.data.msg,
      });
      const cookies = parseCookies();
      if (cookies.verid) {
        destroyCookie({}, "verid", {
          path: "/",
        });
      }
      if (cookies.vermail) {
        destroyCookie({}, "vermail", {
          path: "/",
        });
      }
      router.push("/login");
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: error.response.data.msg || error.message,
      });
    }
  };
  function load() {
    const cookies = parseCookies();
    if (!cookies.verid) return router.push("/forgot");
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
                          Atur Password Baru Anda
                        </h1>
                      </div>
                      <form className="user" onSubmit={forgot}>
                        <div className="form-group">
                          <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="form-control form-control-user"
                            id="inputpass"
                            aria-describedby="emailHelp"
                            placeholder="Password Baru"
                            autoCapitalize="off"
                            name="password"
                            value={password}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            type="password"
                            className="form-control form-control-user"
                            id="inputconfirmpass"
                            aria-describedby="emailHelp"
                            placeholder="Konfirmasi Password Baru"
                            autoCapitalize="off"
                            name="newPassword"
                          />
                        </div>

                        <button
                          type="submit"
                          className="btn btn-dark btn-user btn-block"
                        >
                          Ubah Kata Sandi
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
