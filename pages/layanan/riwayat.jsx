import axios from "axios";
import { getSession } from "next-auth/react";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import dateConverter from "../../layouts/components/dateConverter";
import IDRConverter from "../../layouts/components/IDRConverter";
import Wrapper from "../../layouts/wrapper";

export async function getServerSideProps(ctx) {
  try {
    const session = await getSession(ctx);
    const history = await axios.get(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/history`,
      {
        params: {
          api: 2,
        },
        headers: {
          Authorization: `Bearer ${session.user.token}`,
        },
      }
    );
    return {
      props: {
        history: history.data,
      },
    };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
}

export default function History(props) {
  return (
    <>
      <Head>
        <title>Riwayat Pesanan</title>
      </Head>
      <Wrapper>
        <div className="container-fluid">
          {/* <!-- Page Heading --> */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Riwayat Pesanan</h1>
          </div>
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Riwayat Pesanan Anda
              </h6>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table
                  className="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellSpacing="0"
                >
                  <thead>
                    <tr>
                      <th>ID Pesanan</th>
                      <th>Layanan</th>
                      <th>Jumlah</th>
                      <th>Biaya</th>
                      <th>Target</th>
                      <th>Saldo Awal</th>
                      <th>Saldo Akhir</th>
                      <th>Waktu</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {props.history.history.map((e) => (
                      <tr key={e.orderId}>
                        <td>{e.orderId}</td>
                        <td>{e.serviceName}</td>
                        <td>{e.quantity}</td>
                        <td>{IDRConverter(e.amount)}</td>
                        <td style={{ maxWidth: "15vw" }}>{e.target || "-"}</td>
                        <td>{IDRConverter(e.balanceBefore)}</td>
                        <td>{IDRConverter(e.balanceAfter)}</td>
                        <td>{dateConverter(e.createdAt)}</td>
                        <td>
                          {e.orderStatus == "success" ? (
                            <button className="btn btn-success btn-sm">
                              SUCCESS
                            </button>
                          ) : e.orderStatus == "failed" ? (
                            <button className="btn btn-danger btn-sm">
                              {e.orderStatus.toUpperCase()}
                            </button>
                          ) : e.orderStatus == "partial" ? (
                            <button className="btn btn-warning btn-sm">
                              {e.orderStatus.toUpperCase()}
                            </button>
                          ) : (
                            <button className="btn btn-primary btn-sm">
                              {e.orderStatus.toUpperCase()}
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* <!-- Content Row --> */}
        </div>
      </Wrapper>
    </>
  );
}
