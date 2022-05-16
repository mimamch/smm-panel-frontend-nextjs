import axios from "axios";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Swal from "sweetalert2";
import Wrapper from "../layouts/wrapper";

export const getServerSideProps = async (ctx) => {
  try {
    const session = await getSession(ctx);
    const user = await axios.get(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/profile`,
      {
        headers: {
          Authorization: `Bearer ${session.user.token}`,
        },
      }
    );
    return {
      props: {
        user: user.data.data,
        token: session.user.token,
      },
    };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
};

export default function Profile(props) {
  const router = useRouter();
  const [username, setUsername] = useState(props.user.username);
  const [fullName, setFullName] = useState(props.user.fullName);
  const [phoneNumber, setPhoneNumber] = useState(props.user.phoneNumber);
  const [email, setEmail] = useState(props.user.email);
  const [password, setPassword] = useState(undefined);
  const [confirmPassword, setConfirmPassword] = useState(undefined);
  const ubah = async (e) => {
    e.preventDefault();
    try {
      Swal.fire({
        title: "Mengirim Data... ",
        html: "Mohon Bersabar 😇<br/> Jangan Keluar Dari Halaman Ini! ⛔",
        allowOutsideClick: false,
        allowEscapeKey: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/change-profile`,
        {
          username,
          fullName,
          phoneNumber,
          email,
          password,
          confirmPassword,
        },
        { headers: { Authorization: `Bearer ${props.token}` } }
      );
      Swal.close();
      Swal.fire({
        title: "Berhasil 😍",
        icon: "success",
        html: `Data Berhasil Diubah`,
      });
      router.reload();
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Upsss... 😫",
        icon: "error",
        html: error.response.data.msg || error.message,
      });
    }
  };
  return (
    <Wrapper>
      <Head>
        <title>Ubah Profil</title>
      </Head>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Ubah Profil</h1>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <form onSubmit={ubah}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                  defaultValue={username}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fullName">Nama Lengkap</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  name="fullName"
                  defaultValue={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Nomor Telepon</label>
                <input
                  type="number"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  defaultValue={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  defaultValue={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  Ubah Kata Sandi{" "}
                  <small>*Kosongkan Apabila Tidak Ingin Diubah</small>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  defaultValue={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">
                  Konfirmasi Kata Sandi{" "}
                  <small>*Kosongkan Apabila Tidak Ingin Diubah</small>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  defaultValue={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  <i className="fas fa-pen"></i> UBAH
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
