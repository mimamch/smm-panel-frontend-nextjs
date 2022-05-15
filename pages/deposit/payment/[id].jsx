import axios from "axios";
import { getSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "../../../layouts/components/loading";

export const getServerSideProps = async (ctx) => {
  try {
    const session = await getSession(ctx);
    return {
      props: {
        user: session.user,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
};

export default function Payment(props) {
  const router = useRouter();
  const { id } = router.query;
  const [info, setinfo] = useState({});
  const [loading, setloading] = useState(true);
  const getInfo = async () => {
    const info = await axios.get(
      // `${process.env.NEXT_PUBLIC_API_ENDPOINT2}/deposit/info-deposit`,
      `${process.env.NEXT_PUBLIC_API_ENDPOINT2}/deposit/info-deposit`,
      {
        params: {
          id,
        },
        headers: {
          Authorization: `Bearer ${props.user.token}`,
        },
      }
    );
    setinfo(info.data.data);
    return setloading(false);
  };

  const confirm = () => {
    router.reload();
  };
  const cancel = async () => {
    try {
      console.log(id);
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT2}/deposit/cancel-deposit`,
        // `http://localhost:5000/api/v2/deposit/cancel-deposit`,
        {
          id: id,
        },
        {
          headers: {
            Authorization: `Bearer ${props.user.token}`,
          },
        }
      );
      router.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  if (loading)
    return (
      <>
        <Loading />
      </>
    );

  return (
    <>
      <Head>
        <title>Konfirmasi Pembayaran</title>
      </Head>
      <style jsx>
        {`
          body {
            margin-top: 20px;
            background: #eee;
          }

          .invoice {
            background: #fff;
            padding: 20px;
          }

          .invoice-company {
            font-size: 20px;
          }

          .invoice-header {
            margin: 0 -20px;
            background: #f0f3f4;
            padding: 20px;
          }

          .invoice-date,
          .invoice-from,
          .invoice-to {
            display: table-cell;
            width: 1%;
          }

          .invoice-from,
          .invoice-to {
            padding-right: 20px;
          }

          .invoice-date .date,
          .invoice-from strong,
          .invoice-to strong {
            font-size: 16px;
            font-weight: 600;
          }

          .invoice-date {
            text-align: right;
            padding-left: 20px;
          }

          .invoice-price {
            background: #f0f3f4;
            display: table;
            width: 100%;
          }

          .invoice-price .invoice-price-left,
          .invoice-price .invoice-price-right {
            display: table-cell;
            padding: 20px;
            font-size: 20px;
            font-weight: 600;
            width: 75%;
            position: relative;
            vertical-align: middle;
          }

          .invoice-price .invoice-price-left .sub-price {
            display: table-cell;
            vertical-align: middle;
            padding: 0 20px;
          }

          .invoice-price small {
            font-size: 12px;
            font-weight: 400;
            display: block;
          }

          .invoice-price .invoice-price-row {
            display: table;
            float: left;
          }

          .invoice-price .invoice-price-right {
            width: 25%;
            background: #2d353c;
            color: #fff;
            font-size: 28px;
            text-align: right;
            vertical-align: bottom;
            font-weight: 300;
          }

          .invoice-price .invoice-price-right small {
            display: block;
            opacity: 0.6;
            position: absolute;
            top: 10px;
            left: 10px;
            font-size: 12px;
          }

          .invoice-footer {
            border-top: 1px solid #ddd;
            padding-top: 10px;
            font-size: 10px;
          }

          .invoice-note {
            color: #999;
            margin-top: 80px;
            font-size: 85%;
          }

          .invoice > div:not(.invoice-footer) {
            margin-bottom: 20px;
          }

          .btn.btn-white,
          .btn.btn-white.disabled,
          .btn.btn-white.disabled:focus,
          .btn.btn-white.disabled:hover,
          .btn.btn-white[disabled],
          .btn.btn-white[disabled]:focus,
          .btn.btn-white[disabled]:hover {
            color: #2d353c;
            background: #fff;
            border-color: #d9dfe3;
          }
          .confirm-btn {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
          }
        `}
      </style>
      {/* <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"> */}
      <div className="container">
        <div className="col-md-12">
          <div className="invoice">
            {/* <!-- begin invoice-company --> */}
            <div className="invoice-company text-inverse f-w-600">
              <span className="pull-right hidden-print"></span>
              <Link href="/">
                <a className="text-dark">❤ NUSANTARA SMM</a>
              </Link>
            </div>
            {/* <!-- end invoice-company --> */}
            {/* <!-- begin invoice-header --> */}

            {/* <!-- end invoice-header --> */}
            {/* <!-- begin invoice-content --> */}
            <div className="invoice-content">
              {/* <!-- begin table-responsive --> */}
              <div className="table-responsive">
                <table className="table table-invoice">
                  <thead>
                    <tr>
                      <th>TASK DESCRIPTION</th>
                      <th className="text-center" width="10%">
                        TOTAL
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span className="text-inverse">Isi Saldo Deposit</span>
                      </td>
                      <td className="text-center">Rp. {info.nominal}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <!-- end table-responsive --> */}
              {/* <!-- begin invoice-price --> */}
              <div className="invoice-price">
                <div className="invoice-price-left">
                  <span>
                    {info.bank.bankName} - {info.bank.accountNumber} -{" "}
                    {info.bank.accountName}
                  </span>
                </div>
                <div className="invoice-price-right">
                  <small>TOTAL</small>{" "}
                  <span className="f-w-600">Rp. {info.nominal}</span>
                </div>
              </div>
              {/* <!-- end invoice-price --> */}
              <div className="confirm-btn">
                {info.status == "pending" && (
                  <span className="btn btn-warning mb-2 text-dark">
                    STATUS : BELUM DIBAYAR
                  </span>
                )}
                {info.status == "success" && (
                  <span className="btn btn-success mb-2 text-white">
                    STATUS : TERKONFIRMASI
                  </span>
                )}
                {info.status == "failed" && (
                  <span className="btn btn-danger mb-2 text-white">
                    STATUS : GAGAL
                  </span>
                )}
                {info.status == "pending" ? (
                  <>
                    <button onClick={confirm} className="btn btn-dark btn-lg">
                      REFRESH
                    </button>
                    <button
                      onClick={cancel}
                      className="btn btn-danger mt-2 btn-sm"
                    >
                      Batalkan Deposit
                    </button>
                  </>
                ) : (
                  <Link href="/dashboard">
                    <a className="btn btn-dark">Dashboard</a>
                  </Link>
                )}
              </div>
            </div>
            {/* <!-- end invoice-content --> */}
            {/* <!-- begin invoice-note --> */}
            <div className="invoice-note">
              * Silahkan melakukan pembayaran ke info diatas <br />* Sertakan ID
              Deposit pada catatan transfer <b>{id}</b> (OPSIONAL)
              <br />* Silahkan melakukan kontak dengan admin setelah melakukan
              pembayaran, Jangan lupa untuk menyertakan bukti pembayaran
            </div>
            {/* <!-- end invoice-note --> */}
            {/* <!-- begin invoice-footer --> */}
            <div className="invoice-footer">
              <p className="text-center m-b-5 f-w-600">KONTAK</p>
              <p className="text-center">
                <a
                  href="https://wa.me/6285838707828"
                  className="mr-2 text-dark"
                >
                  <i className="fab fa-fw fa-lg fa-whatsapp"></i>
                  +6285838707828
                </a>
                <a href="mailto:mimamch28@gmail.com" className="text-dark">
                  <i className="fa fa-fw fa-lg fa-envelope"></i>{" "}
                  mimamch28@gmail.com
                </a>
              </p>
            </div>
            {/* <!-- end invoice-footer --> */}
          </div>
        </div>
      </div>
      {/* <Js /> */}
    </>
  );
}
