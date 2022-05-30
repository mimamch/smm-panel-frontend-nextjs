import axios from "axios";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import IDRConverter from "../../layouts/components/IDRConverter";
import Wrapper from "../../layouts/wrapper";

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  try {
    const bank = await axios.get(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT2}/deposit/get-bank`,
      {
        headers: {
          Authorization: `Bearer ${session.user.token}`,
        },
      }
    );

    return {
      props: {
        bank: bank.data.data,
        token: session.user.token,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
};

export default function DepositBaru(props) {
  const router = useRouter();
  const [tujuan, settujuan] = useState("");
  const [minimal, setminimal] = useState(0);
  const [jumlah, setjumlah] = useState(0);
  const [saldoDiterima, setsaldoDiterima] = useState(0);
  const changeTujuan = (val) => {
    settujuan(JSON.parse(val.target.value));
  };

  async function buatDeposit(e) {
    e.preventDefault();
    if (jumlah < minimal)
      return Swal.fire({
        title: "Upsss 😓",
        icon: "error",
        html: `Jumlah Deposit Tidak Boleh Kurang Dari Rp. ${minimal}`,
      });
    try {
      try {
        const send = await axios.post(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT2}/deposit/new`,
          {
            bank: tujuan._id,
            nominal: jumlah,
          },
          {
            headers: {
              Authorization: `Bearer ${props.token}`,
            },
          }
        );
        // Swal.fire({
        //   title: "Yeyyy 😍",
        //   icon: "success",
        //   html: `Pembuatan Tiket Deposit Berhasil ! <br/><b>ID Deposit Anda : ${send.data.msg._id}</b>
        //   <br/> Silahkan melakukan transfer ${tujuan.bankName} ke ${tujuan.accountNumber} <br/>
        //   Sejumlah : <b>${send.data.msg.nominal}</b><br/>
        //   Lalu hubungi ADMIN <a href="https://wa.me/6285838707828">DI SINI</a>`,
        // });
        if (send.data.msg.redirectUrl) {
          return window.open(send.data.msg.redirectUrl);
        }
        router.push("/deposit/payment/" + send.data.msg._id);
      } catch (error) {
        console.log(error);
        Swal.fire({
          title: "Upsss 😓",
          icon: "error",
          html: `${error.response.data.msg || error.message}`,
        });
      }
    } catch (error) {}
  }
  const getMinimal = () => {
    if (!tujuan) return;
    setminimal(tujuan.min);
  };
  const getSaldoDiterima = () => {
    if (!tujuan || !jumlah) return;
    let promo;
    promo = (jumlah * tujuan.promo) / 100;
    setsaldoDiterima(parseInt(jumlah) + promo);
  };
  useEffect(() => {
    getMinimal();
    getSaldoDiterima();
  }, [tujuan, jumlah]);

  return (
    <Wrapper>
      <Head>
        <title>Isi Saldo Deposit</title>
      </Head>
      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Isi Saldo Deposit</h1>
        </div>

        <form onSubmit={buatDeposit}>
          <div className="form-group row">
            <div className="col-md-6">
              <label htmlFor="tujuan">Pilih Rekening</label>
              <select
                onChange={changeTujuan}
                id="tujuan"
                className="form-control"
                defaultValue=""
              >
                <option value="" disabled>
                  Pilih Tujuan
                </option>
                {props.bank.map((e) => (
                  <option key={e._id} value={JSON.stringify(e)}>
                    {e.bankName +
                      " " +
                      `${e.isAuto ? "(OTOMATIS)" : "(MANUAL)"}`}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-6">
              <label htmlFor="minimal">Minimal Jumlah</label>
              <input
                type="text"
                id="minimal"
                className="form-control"
                value={IDRConverter(minimal) || "Pilih Tujuan Terlebih Dahulu"}
                disabled
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-3">
              <div>
                <label htmlFor="nominal">Jumlah Deposit</label>
                <input
                  type="number"
                  id="nominal"
                  className="form-control"
                  placeholder="0"
                  onChange={(e) => {
                    setjumlah(parseInt(e.target.value));
                  }}
                  required
                />
              </div>
            </div>
            <div className="form-group col-md-3">
              <div>
                <label htmlFor="saldoDidapat">Saldo Yang Diterima</label>
                <input
                  type="text"
                  id="saldoDidapat"
                  className="form-control"
                  value={IDRConverter(saldoDiterima)}
                  disabled
                />
              </div>
            </div>
          </div>
          <button className="btn btn-dark" type="submit">
            Buat Deposit
          </button>
        </form>
      </div>
    </Wrapper>
  );
}
