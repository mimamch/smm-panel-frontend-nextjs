import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import dateConverter from "../../layouts/components/dateConverter";
import Wrapper from "../../layouts/wrapper";

export default function User() {
  const [data, setData] = useState([]);

  const get = async () => {
    const his = await axios.get(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT2}/user/get-all-history`
    );
    setData(his.data.data);
    $(document).ready(function () {
      $("#table").DataTable({});
    });
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <Wrapper>
      <Head>
        <title>Order History - Admin</title>
      </Head>
      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Daftar Pesanan User</h1>
        </div>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">PESANAN</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="table"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>ID Pesanan</th>
                    <th>User</th>
                    <th>Service</th>
                    <th>Quantity</th>
                    <th>Target</th>
                    <th>Amount</th>
                    <th>Balance Before</th>
                    <th>Balance After</th>
                    <th>Time</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {data.map((e, i) => (
                    <tr key={e._id}>
                      <td>{i + 1}</td>
                      <td style={{ maxWidth: "100px", wordWrap: "break-word" }}>
                        {e._id}
                      </td>
                      <td>{e.user?.username}</td>
                      <td>{e.serviceName}</td>
                      <td>{e.quantity}</td>
                      <td style={{ maxWidth: "150px", wordWrap: "break-word" }}>
                        {e.target}
                      </td>
                      <td>{e.amount}</td>
                      <td>{e.balanceBefore || "-"}</td>
                      <td>{e.balanceAfter || "-"}</td>
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
  );
}
