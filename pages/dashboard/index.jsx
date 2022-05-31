import Head from "next/head";
import Wrapper from "../../layouts/wrapper";
import { useState, useEffect } from "react";
import axios from "axios";
import { getSession } from "next-auth/react";
import IDRConverter from "../../layouts/components/IDRConverter";
import Swal from "sweetalert2";

// export const getServerSideProps = async (ctx) => {
//   try {
//     const userData = await axios.get(
//       "https://api.mimamch.online/api/v1/user/profile",
//       {
//         headers: {
//           Authorization: `Bearer ${ctx.req.cookies.jwt}`,
//         },
//       }
//     );

//     return {
//       props: {
//         // category: category.data.data,
//         token: ctx.req.cookies.jwt,
//         userData: userData.data.data,
//       },
//     };
//   } catch (error) {
//     return {
//       props: {
//         // category: category.data.data,
//         token: ctx.req.cookies.jwt,
//         userData: { username: "guest" },
//       },
//     };
//   }
// };

export const getServerSideProps = async (ctx) => {
  try {
    const { user } = await getSession(ctx);
    const getUserProfile = await axios.get(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/profile`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    const announcements = await axios.get(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT2}/announcements`
    );
    const userData = getUserProfile.data.data;
    return {
      props: { userData, user, announcements: announcements.data.data },
    };
  } catch (error) {
    console.log(error);
  }
};

export default function Home(props) {
  const userData = props.userData;
  useEffect(() => {
    if (props?.announcements[0])
      Swal.fire({
        title: props.announcements[0].title,
        text: props.announcements[0].text,
        confirmButtonText: "Tutup",
      });
  }, []);
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
          <div className="row">
            <div className="col-sm-6">
              {props.announcements.map((e) => (
                <div key={e._id} className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-danger">
                      {e.title}
                    </h6>
                  </div>
                  <div className="card-body">{e.text}</div>
                </div>
              ))}
            </div>
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
                        {IDRConverter(userData.balance)}
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
                        {IDRConverter(userData.balanceUsed)}
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
                        {IDRConverter(userData.totalDeposit)}
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
          </div>
        </div>
      </Wrapper>
    </>
  );
}
