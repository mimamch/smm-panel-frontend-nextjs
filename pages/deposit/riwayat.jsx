import axios from "axios";
import { getSession } from "next-auth/react";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import Wrapper from "../../layouts/wrapper";

export async function getServerSideProps(ctx) {
  try {
    return {
      props: {},
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
                      <th>Tujuan</th>
                      <th>Nominal</th>
                      <th>Waktu</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td>#12345</td>
                      <td>BCA(MANUAL)</td>
                      <td>Rp. 100.000</td>
                      <td>09-05-22</td>
                      <td>
                        <span className="btn btn-success">Success</span>
                      </td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>#43211</td>
                      <td>BRI(MANUAL)</td>
                      <td>Rp. 150.000</td>
                      <td>20-05-22</td>
                      <td>
                        <span className="btn btn-warning">Pending</span>
                      </td>
                    </tr>
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
