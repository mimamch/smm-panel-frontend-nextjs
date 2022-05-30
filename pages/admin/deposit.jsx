import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import dateConverter from "../../layouts/components/dateConverter";
import Wrapper from "../../layouts/wrapper";

export const getServerSideProps = async () => {
  try {
    const deposit = await axios.get(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT2}/user/get-deposit`
    );
    // console.log(user);
    return {
      props: {
        deposit: deposit.data.data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
};

export default function User(props) {
  const router = useRouter();
  const accept = async (id) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT2}/user/action-deposit`,
        {
          action: "accept",
          id: id,
        }
      );
      router.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const decline = async (id) => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT2}/user/action-deposit`,
        {
          action: "decline",
          id: id,
        }
      );
      router.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <Head>
        <title>Deposit - Admin</title>
      </Head>
      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Daftar Deposit</h1>
        </div>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">DEPOSIT</h6>
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
                    <th>ID Deposit</th>
                    <th>Username</th>
                    <th>Nominal</th>
                    <th>Tujuan</th>
                    <th>Balance Before</th>
                    <th>Balance After</th>
                    <th>Last Updated</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {props.deposit.map((e) => (
                    <tr key={e._id}>
                      <td>{e._id}</td>
                      <td>{e.user.username}</td>
                      <td>{e.nominal}</td>
                      <td>{e.bank.bankName}</td>
                      <td>{e.balanceBefore || "-"}</td>
                      <td>{e.balanceAfter || "-"}</td>
                      <td>{dateConverter(e.updatedAt)}</td>
                      {e.status == "pending" ? (
                        <td>
                          <button
                            onClick={() => accept(e._id)}
                            className="btn btn-primary mr-2"
                          >
                            Accept
                          </button>
                          <button
                            onClick={() => decline(e._id)}
                            className="btn btn-danger"
                          >
                            Decline
                          </button>
                        </td>
                      ) : e.status == "failed" ? (
                        <td>
                          <button className="btn btn-danger">Failed</button>
                        </td>
                      ) : (
                        <td>
                          <button className="btn btn-success">Success</button>
                        </td>
                      )}
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
