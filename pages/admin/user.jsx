import axios from "axios";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import IDRConverter from "../../layouts/components/IDRConverter";
import Wrapper from "../../layouts/wrapper";

export default function User() {
  const [data, setData] = useState([]);

  const get = async () => {
    const his = await axios.get(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT2}/user/get-user`
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
        <title>Users - Admin</title>
      </Head>
      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Daftar User</h1>
        </div>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">User</h6>
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
                    <th>Username</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Balance</th>
                    <th>Total Deposit</th>
                    <th>Balance Used</th>
                  </tr>
                </thead>

                <tbody>
                  {data.map((e, i) => (
                    <tr key={e._id}>
                      <td>{i + 1}</td>
                      <td>{e.username}</td>
                      <td>{e.phoneNumber}</td>
                      <td>{e.email}</td>
                      <td>{IDRConverter(e.balance)}</td>
                      <td>{IDRConverter(e.totalDeposit)}</td>
                      <td>{IDRConverter(e.balanceUsed)}</td>
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
