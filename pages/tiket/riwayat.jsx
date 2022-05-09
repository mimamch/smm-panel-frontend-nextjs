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
  return (
    <>
      <Head>
        <title>Riwayat Tiket</title>
      </Head>
      <Wrapper>
        <div className="container-fluid">
          {/* <!-- Page Heading --> */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Riwayat Tiket</h1>
          </div>
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Riwayat Tiket Anda
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
                      <th>ID Tiket</th>
                      <th>Subjek</th>
                      <th>Waktu Dibuat</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        #12345{" "}
                        <a href="#" className="btn btn-sm btn-success">
                          <i className="far fa-eye"></i>
                        </a>
                      </td>
                      <td>Masalah Deposit</td>
                      <td>20-05-22</td>

                      <td>
                        <span className="btn btn-dark">Tertutup</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        #12234{" "}
                        <a href="#" className="btn btn-sm btn-success">
                          <i className="far fa-eye"></i>
                        </a>
                      </td>
                      <td>Masalah Layanan</td>

                      <td>05-05-22</td>
                      <td>
                        <span className="btn btn-warning">Terbuka</span>
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
    </>
  );
}
