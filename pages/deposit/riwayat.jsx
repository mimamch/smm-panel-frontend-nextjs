import axios from "axios";
import { getSession } from "next-auth/react";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";
import Wrapper from "../../layouts/wrapper";
import Link from "next/link";
import IDRConverter from "../../layouts/components/IDRConverter";
import dateConverter from "../../layouts/components/dateConverter";
const router = require("next/router");

export async function getServerSideProps(ctx) {
  try {
    const session = await getSession(ctx);

    return {
      props: {
        user: session.user,
      },
    };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
}

export default function History({ user, ...props }) {
  // useEffect(() => {
  //   $(document).ready(function () {
  //     $("#dataTable").DataTable({
  //       searching: false,
  //       order: [[0, "desc"]],
  //       bDestroy: true,
  //       paging: false,
  //     });
  //   });
  // }, []);

  const [history, setHistory] = useState([]);

  const getHistory = async () => {
    const his = await axios.get(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT2}/deposit/history`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    setHistory(his.data.msg);
    $(document).ready(function () {
      $("#historyTable").DataTable({
        order: [[0, "desc"]],
      });
    });
  };

  useEffect(() => {
    getHistory();
  }, []);

  const cancel = async (e) => {
    if (e.status != "pending" || e.bank.isAuto) return;
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT2}/deposit/cancel-deposit`,
        // `http://localhost:5000/api/v2/deposit/cancel-deposit`,
        {
          id: e._id,
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

  return (
    <>
      <Head>
        <title>Riwayat Deposit</title>
      </Head>
      <Wrapper>
        <div className="container-fluid">
          {/* <!-- Page Heading --> */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Riwayat Deposit</h1>
          </div>
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Riwayat Deposit Anda
              </h6>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table
                  className="table table-bordered"
                  id="historyTable"
                  width="100%"
                  cellSpacing="0"
                >
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>ID Deposit</th>
                      <th>Nominal</th>
                      <th>Waktu</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {history.map((e, i) => (
                      <tr key={e._id}>
                        <td>{i + 1}</td>
                        <td>
                          <Link
                            href={
                              e.redirectUrl
                                ? e.redirectUrl
                                : `/deposit/payment/${e._id}`
                            }
                          >
                            <a target="_blank">{e._id}</a>
                          </Link>
                        </td>
                        <td>{IDRConverter(e.nominal)}</td>
                        <td>{dateConverter(e.createdAt)}</td>
                        <td>
                          <span
                            onClick={() => cancel(e)}
                            className={`btn btn-${
                              e.status == "success"
                                ? "success"
                                : e.status == "pending"
                                ? "warning text-dark"
                                : "danger"
                            }`}
                          >
                            {e.status == "pending" && !e.bank.isAuto
                              ? "BATALKAN"
                              : e.status.toUpperCase()}
                          </span>
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
      <Script
        src="/assets/vendor/datatables/jquery.dataTables.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/vendor/datatables/dataTables.bootstrap4.min.js"
        strategy="lazyOnload"
      />
    </>
  );
}
