import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Wrapper from "../../layouts/wrapper";
import axios from "axios";
import Swal from "sweetalert2";

export const getServerSideProps = async (ctx) => {
  // const category = await axios.get(
  //   "https://api.mimamch.online/api/v1/services/category"
  // );

  return {
    props: {
      // category: category.data.data,
      token:
        ctx.req.cookies.jwt ||
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZkMTAzOWUzY2ZlODc5ODQ4MTk5N2QiLCJ1c2VybmFtZSI6Im1pbWFtY2giLCJmdWxsTmFtZSI6Ik11aGFtbWFkIEltYW0gQ2hvaXJ1ZGluIiwiZW1haWwiOiJtaW1hbWNoMjhAZ21haWwuY29tIiwicGhvbmVOdW1iZXIiOiIwODU4Mzg3MDc4MjgiLCJpYXQiOjE2NTE3NjAwNzJ9.azPBZgXiO2gmL-AZ7tZHRg14JqSsRh8WoxvMoSKmt20",
    },
  };
};

export default function Services(props) {
  const [category, setcategory] = useState([]);
  const [services, setservices] = useState([]);
  const [service, setService] = useState({});
  const [quantity, setquantity] = useState(0);
  const [totalPrice, settotalPrice] = useState(0);
  const [target, setTarget] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const pesan = (e) => {
    e.preventDefault();
    // setmodal(true);
    // setLoading(true);
    const headers = {
      Authorization: `Bearer ${props.token}`,
    };
    axios
      .post(
        "https://api.mimamch.online/api/v1/order/new-order",
        {
          service: service.serviceId,
          quantity: quantity,
          target: target,
        },
        {
          headers: headers,
        }
      )
      .then((res) => {
        setData({
          status: true,
          title: "BERHASIL",
          data: res.data,
        });
        return Swal.fire({
          title: "BERHASIL!",
          html: `ORDER ID : <b>${res.data.history.orderId}</b> <br/> SALDO AKHIR : <b>Rp. ${res.data.history.balanceAfter}</b>`,
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((e) => {
        setData({
          status: false,
          title: "GAGAL",
          data: e.response.data,
        });
        return Swal.fire({
          title: "Upsss!",
          html: e.response.data.msg,
          icon: "error",
          confirmButtonText: "OK",
        });
      })
      .then((e) => {});
  };
  const changeCategory = (e) => {
    axios
      .get(
        `https://api.mimamch.online/api/v1/services/category?cat=${e.target.value}`
      )
      .then((res) => setservices(res.data.data));
  };
  const changeService = (e) => {
    axios
      .get(`https://api.mimamch.online/api/v1/services?id=${e.target.value}`)
      .then((serv) => {
        setService(serv.data.data);
      });
  };

  const getCategory = () => {
    axios
      .get("https://api.mimamch.online/api/v1/services/category")
      .then((res) => setcategory(res.data.data));
  };

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    const hargaBayar = () => {
      const rate = parseInt(service.rate);
      const price = rate / 1000;
      return settotalPrice(Math.ceil(price * quantity));
    };
    hargaBayar();
  }, [quantity, data]);

  return (
    <>
      <Head>
        <title>Pesan Layanan</title>
      </Head>
      <Wrapper>
        <div className="container-fluid">
          {/* <!-- Page Heading --> */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Pesan Layanan Baru</h1>
          </div>

          {/* <!-- Content Row --> */}
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={pesan}>
                <div className="form-group">
                  <label>Kategori</label>
                  <select
                    defaultValue=""
                    className="form-control select2"
                    onChange={changeCategory}
                  >
                    <option value="" disabled>
                      Pilih Kategori
                    </option>
                    {category.map((e) => {
                      return (
                        <option key={e} value={e}>
                          {e}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="form-group">
                  <label>Layanan</label>
                  <select
                    onChange={changeService}
                    defaultValue=""
                    className="form-control select2"
                  >
                    <option value="" disabled>
                      Pilih Layanan
                    </option>
                    {services.map((e) => {
                      return (
                        <option key={e.serviceId} value={e.serviceId}>
                          {e.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="disableinput">Harga/1000</label>
                  <input
                    type="text"
                    className="form-control"
                    id="disableinput"
                    placeholder="Rp.xxxxxx"
                    disabled
                    value={`Rp. ${service?.rate || 0}`}
                  />
                </div>
                <div className="form-group">
                  <label>Target</label>
                  <input
                    type="text"
                    onChange={(e) => setTarget(e.target.value)}
                    className="form-control"
                    placeholder="Link/Username Target"
                  />
                </div>
                <div className="form-group">
                  <label>Jumlah</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Masukkan Jumlah"
                    onChange={(e) => {
                      setquantity(e.target.value);
                    }}
                    onWheel={(e) => {
                      return e.target.blur();
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="hargaBayar">Harga Bayar</label>
                  <input
                    type="text"
                    className="form-control"
                    id="hargaBayar"
                    placeholder="Rp.xxxxx"
                    disabled
                    value={`Rp. ${totalPrice || 0}`}
                  />
                </div>
                <div className="card-action">
                  <button type="sumbit" className="btn btn-dark ">
                    Pesan Sekarang
                  </button>
                </div>
                <div className="form-group mt-5">
                  <label>Deskripsi layanan</label>
                  <div
                    style={{
                      minHeight: "20px",
                      overflowY: "auto",
                      wordWrap: "break-word",
                      padding: "0 10px",
                      whiteSpace: "pre-wrap",
                    }}
                    // disabled
                  >
                    {service.desc}
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <p>Ketentuan</p>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
