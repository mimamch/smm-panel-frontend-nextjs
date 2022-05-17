import axios from "axios";
import { Children, useState, useEffect } from "react";
import Swal from "sweetalert2";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";
import Js from "../layouts/js";
import Link from "next/link";
import { getCsrfToken, getSession } from "next-auth/react";
import { useSession, signIn, signOut } from "next-auth/react";

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}

export default function Login({ csrfToken }) {
  const session = useSession();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  async function login(e) {
    e.preventDefault();
    signIn("credentials", { username, password, redirect: false }).then((e) => {
      if (e.error)
        return Swal.fire({
          title: "Upsss!",
          text: e.error,
          icon: "error",
        });

      return router.reload();
    });

    return;
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/login`,
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then((e) => {
        setCookie(null, "jwt", e.data.token);
        router.push("/dashboard");
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
          <title>MASUK</title>
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
                          MASUK
                        </h1>
                      </div>
                      <form
                        className="user"
                        onSubmit={login}
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
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Masukkan Email / Username"
                            autoCapitalize="off"
                            name="username"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                            name="password"
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
                        <div className="text-center col-6">
                          <Link href="/forgot">
                            <a className="small">Lupa Password?</a>
                          </Link>
                        </div>
                        <div className="text-center col-6">
                          <Link href="/register">
                            <a className="small">Daftar Sekarang!</a>
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
