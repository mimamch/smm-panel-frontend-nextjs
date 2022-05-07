import Head from "next/head";
import Image from "next/image";
import Wrapper from "../../layouts/wrapper";
import { useState, useEffect } from "react";
import axios from "axios";

export const getServerSideProps = async (ctx) => {
  try {
    const userData = await axios.get(
      "https://api.mimamch.online/api/v1/user/profile",
      {
        headers: {
          Authorization: `Bearer ${ctx.req.cookies.jwt}`,
        },
      }
    );

    return {
      props: {
        // category: category.data.data,
        token: ctx.req.cookies.jwt,
        userData: userData.data.data,
      },
    };
  } catch (error) {
    return {
      props: {
        // category: category.data.data,
        token: ctx.req.cookies.jwt,
        userData: { username: "guest" },
      },
    };
  }
};

export default function Home(props) {
  const [userData, setUserData] = useState(props.userData);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Wrapper>
        <div className="container-fluid">
          {/* <!-- Page Heading --> */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          </div>

          {/* <!-- Content Row --> */}
          <div className="row">
            {/* <!-- Earnings (Monthly) Card Example --> */}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-dark shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-dark text-uppercase mb-1">
                        SALDO
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        Rp. {userData.balance}
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Earnings (Monthly) Card Example --> */}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                        Saldo Digunakan
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        Rp. {userData.balanceUsed}
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-info shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                        Total Deposit
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        Rp. {userData.totalDeposit}
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Earnings (Monthly) Card Example --> */}

            {/* <!-- Pending Requests Card Example --> */}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-warning shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                        Pending Requests
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        18
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-comments fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
