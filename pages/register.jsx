import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";
import Js from "../layouts/js";
import Link from "next/link";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const router = useRouter();
  function register(e) {
    e.preventDefault();
    if (password != confirmPassword)
      return Swal.fire({
        title: "Upsss!",
        text: "Password dan Konfirmasi Password Tidak Sama",
        icon: "error",
      });
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/register`,
        {
          username,
          password,
          fullName,
          phoneNumber,
          email,
        },
        {
          withCredentials: true,
        }
      )
      .then((e) => {
        Swal.fire({
          title: "Yeyyy!",
          text: "Berhasil Mendaftar, Silahkan Masuk.",
          icon: "success",
        });
        router.push("/login");
      })
      .catch((e) => {
        // console.log(e);
        // if (e.response.status == 200) return;
        Swal.fire({
          title: "Upsss!",
          text: e.response?.data?.msg,
          icon: "error",
        });
      });

    //   setCookie("token", response.data.token);
    //   setAlert({ message: "LOGIN BERHASIL", status: "success" });

    //       setAlert({
    //         status: "danger",
    //         message: error.response.data.msg,
    //       });
  }
  return (
    <>
      <div className="container">
        <Head>
          <title>DAFTAR</title>
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
                  <a class="btn btn-dark btn-icon-split">
                    <span class="icon text-gray-600 btn-sm ">
                      <i class="fas fa-home text-gray-200"></i>
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
                          Daftar
                        </h1>
                      </div>
                      <form className="user" onSubmit={register}>
                        <div className="form-group">
                          <input
                            onChange={(e) => setFullName(e.target.value)}
                            type="text"
                            className="form-control form-control-user"
                            id="fullName"
                            aria-describedby="emailHelp"
                            placeholder="Masukkan Nama Lengkap"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            className="form-control form-control-user"
                            id="username"
                            aria-describedby="username"
                            placeholder="Buat Username"
                            autoCapitalize="off"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Masukkan Email Anda"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            type="number"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Masukkan Nomor Telepon Anda"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Buat Kata Sandi"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            type="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Ulangi Kata Sandi"
                          />
                        </div>

                        <button
                          type="submit"
                          className="btn btn-dark btn-user btn-block"
                        >
                          MASUK
                        </button>
                      </form>
                      <hr />
                      <div className="row">
                        {" "}
                        <div className="text-center col-12">
                          <Link href="/login">
                            <a className="small text-gray-700 underline">
                              <u> Sudah Punya Akun? Masuk</u>
                            </a>
                          </Link>
                        </div>
                      </div>
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
