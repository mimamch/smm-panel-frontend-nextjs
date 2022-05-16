import axios from "axios";
import Head from "next/head";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import IDRConverter from "../../layouts/components/IDRConverter";
import Wrapper from "../../layouts/wrapper";
import parse from "html-react-parser";

export const getServerSideProps = async () => {
  try {
    const category = await axios.get(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT2}/services/category`
    );
    return {
      props: {
        category: category.data.data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
};

export default function DaftarLayanan({ category }) {
  const [services, setservices] = useState([]);
  const selectedCategory = async (cat) => {
    try {
      Swal.fire({
        title: "Mohon Bersabar 😇",
        text: "Mengambil Data...",
        allowEscapeKey: false,
        allowOutsideClick: false,
        showLoaderOnConfirm: true,
        preConfirm: true,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      const service = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT2}/services/category`,
        {
          params: {
            cat: cat.target.value,
          },
        }
      );
      Swal.close();
      setservices(service.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Head>
        <title>Daftar Layanan - Nusantara SMM</title>

        <meta
          name="title"
          content="Daftar Layanan - Nusantara SMM"
          key="title"
        />
        <meta
          key="description"
          name="description"
          content="Cari dan temukan layanan yang sesuai kebutuhan Anda, dengan harga termurah dari semua layanan SMM lainnya."
        />
      </Head>
      <Wrapper>
        <div className="container-fluid">
          {/* <!-- Page Heading --> */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Daftar Layanan</h1>
          </div>
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Layanan Aktif Kami
              </h6>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="selectCgry">Pilih Kategori</label>
                <select
                  onChange={selectedCategory}
                  id="selectCtgry"
                  className="form-control"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Pilih Kategori Telebih Dulu
                  </option>
                  {category.map((e) => (
                    <option value={e} key={e}>
                      {e}
                    </option>
                  ))}
                </select>
              </div>
              <div className="table-responsive">
                <table
                  className="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellSpacing="0"
                >
                  <thead>
                    <tr>
                      <th>ID Layanan</th>
                      <th>Nama</th>
                      <th>Harga/1000</th>
                      <th>Min.</th>
                      <th>Max.</th>
                      <th>Deskripsi</th>
                    </tr>
                  </thead>

                  <tbody>
                    {services.map((e) => (
                      <tr key={e.serviceId}>
                        <td>{e.serviceId}</td>
                        <td>{e.name}</td>
                        <td>{IDRConverter(e.rate)}</td>
                        <td>{e.min}</td>
                        <td>{e.max}</td>
                        <td>{parse(e.desc)}</td>
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
