import axios from "axios";
import { getSession } from "next-auth/react";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import Wrapper from "../../layouts/wrapper";
import Link from "next/link";
import IDRConverter from "../../layouts/components/IDRConverter";

export async function getServerSideProps(ctx) {
  try {
    const session = await getSession(ctx);
    const history = await axios.get(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT2}/deposit/history`,
      {
        headers: {
          Authorization: `Bearer ${session.user.token}`,
        },
      }
    );
    return {
      props: {
        user: session.user,
        history: history.data.msg,
      },
    };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
}

export default function History({ history }) {
  useEffect(() => {
    $(document).ready(function () {
      $("#dataTable").DataTable({
        searching: false,
        order: [[0, "desc"]],
        bDestroy: true,
        paging: false,
      });
    });
  }, []);

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
                  id="dataTable"
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
                          <Link href={`/deposit/payment/${e._id}`}>
                            {e._id}
                          </Link>
                        </td>
                        <td>{IDRConverter(e.nominal)}</td>
                        <td>{e.createdAt}</td>
                        <td>
                          <span
                            className={`btn btn-${
                              e.status == "success"
                                ? "success"
                                : e.status == "pending"
                                ? "warning"
                                : "danger"
                            }`}
                          >
                            {e.status.toUpperCase()}
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
