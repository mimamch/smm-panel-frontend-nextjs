import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import Head from "next/head";
import Wrapper from "../../layouts/wrapper";
import axios from "axios";
import Swal from "sweetalert2";
import { getSession } from "next-auth/react";
import IDRConverter from "../../layouts/components/IDRConverter";
// export const getServerSideProps = async (ctx) => {
//   return {
//     props: {
//       // category: category.data.data,
//       token: ctx.req.cookies.jwt,
//     },
//   };
// };

export const getServerSideProps = async (ctx) => {
  try {
    const { user } = await getSession(ctx);
    const profile = await axios.get(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/profile`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    return {
      props: {
        token: user.token,
        userData: profile.data.data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
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
  const pesan = async (e) => {
    e.preventDefault();

    // CONFIRM BUTTON
    const confirm = await Swal.fire({
      title: "Apakah Anda Yakin?",
      html: `<b>Layanan</b> : ${service.name}<br/><b>Harga</b> : ${IDRConverter(
        totalPrice
      )}<br/><b>Jumlah : </b> ${quantity}<br/><b>Target</b> : ${target}`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      allowOutsideClick: false,
      confirmButtonText: "Yakin, Beli Sekarang!",
      cancelButtonText: "Batal",
    });
    if (!confirm.isConfirmed) return;
    const headers = {
      Authorization: `Bearer ${props.token}`,
    };
    Swal.fire({
      title: "Sedang Memproses...",
      html: "Mohon Bersabar 😇<br/> Jangan Keluar Dari Halaman Ini! ⛔",
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT2}/order/new-order`,
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
        setTarget("");
        setquantity(0);
        Swal.close();
        return Swal.fire({
          title: "BERHASIL!",
          html: `<b>Order ID :</b> ${
            res.data.history.orderId
          }<br/><b>Layanan :</b> ${
            res.data.history.serviceName
          }<br/><b>Jumlah :</b> ${
            res.data.history.quantity
          }<br/><b>Harga :</b> ${IDRConverter(
            res.data.history.amount
          )}<br/><b>Saldo Awal :</b> ${IDRConverter(
            res.data.history.balanceBefore
          )}<br/><b>Saldo Akhir :</b> ${IDRConverter(
            res.data.history.balanceAfter
          )}`,
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
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT2}/services/category?cat=${e.target.value}`,
        {
          params: {
            cat: e.target.value,
          },
        }
      )
      .then((res) => {
        Swal.close();
        setservices(res.data.data);
      })
      .then((e) => setService({}));
  };
  const changeService = (e) => {
    if (e.target.value == 0) return;
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
    axios
      .get(`${process.env.NEXT_PUBLIC_API_ENDPOINT2}/services`, {
        params: {
          id: e.target.value,
        },
      })
      .then((serv) => {
        Swal.close();
        setService(serv.data.data);
      });
  };

  const getCategory = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_ENDPOINT2}/services/category`)
      .then((res) => setcategory(res.data.data));
  };
  const hargaBayar = (e) => {
    const rate = parseInt(service.rate || 0);
    const price = rate / 1000;
    return settotalPrice(Math.ceil(price * e));
  };

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {}, [quantity, data]);

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
                    defaultValue="0"
                    className="form-control "
                  >
                    <option value="0">Pilih Layanan</option>
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
                    value={IDRConverter(service.rate)}
                  />
                </div>
                <div className="form-group">
                  <label>Target</label>
                  <input
                    type="text"
                    onChange={(e) => setTarget(e.target.value)}
                    value={target}
                    className="form-control"
                    placeholder="Link/Username Target"
                    autoCapitalize="off"
                  />
                </div>
                <div className="row ">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Jumlah</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Masukkan Jumlah"
                        onChange={(e) => {
                          setquantity(e.target.value);
                          hargaBayar(e.target.value);
                        }}
                        onWheel={(e) => {
                          return e.target.blur();
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="form-group">
                      <label>Jumlah Min.</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="0"
                        value={service.min || 0}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="form-group">
                      <label>Jumlah Maks.</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="0"
                        value={service.max || 0}
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 ">
                    <div className="form-group">
                      <label htmlFor="hargaBayar">Harga Bayar</label>
                      <input
                        type="text"
                        className="form-control"
                        id="hargaBayar"
                        placeholder="Rp.xxxxx"
                        disabled
                        value={IDRConverter(totalPrice)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 ">
                    <div className="form-group">
                      <label htmlFor="saldoAnda">Saldo Anda</label>
                      <input
                        type="text"
                        className="form-control"
                        id="saldoAnda"
                        placeholder="Rp.xxxxx"
                        disabled
                        value={IDRConverter(props.userData.balance)}
                      />
                    </div>
                  </div>
                </div>
                <div className="card-action mb-5">
                  <button type="sumbit" className="btn btn-dark ">
                    Pesan Sekarang
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6 mt-0">
              <div className="card  shadow-sm mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Deskripsi Layanan
                  </h6>
                </div>
                <div className="card-body">
                  {service.desc && parse(service.desc)}
                </div>
              </div>
              <div className="card shadow-sm mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Wajib Baca Sebelum Order!
                  </h6>
                </div>
                <div className="card-body px-3 py-1">
                  <div className="row ">
                    <div className="col-sm-6">
                      {/* INNER CARD */}
                      <div className="card border-0">
                        <div className="card-body px-3 py-2">
                          <h6 className="m-0 font-weight-bold text-gray-600">
                            Langkah-langkah membuat pesanan baru:
                          </h6>
                          <ul className="p-1 m-0">
                            <li>Pilih salah satu Kategori.</li>
                            <li>
                              Pilih salah satu layanan yang ingin dipesan.
                            </li>
                            <li>
                              Masukkan target pesanan sesuai ketentuan yang
                              diberikan layanan tersebut.
                            </li>
                            <li>Masukkan jumlah pesanan yang diinginkan.</li>
                            <li>
                              Klik tombol Pesan Sekarang! untuk membuat pesanan
                              baru.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      {/* INNER CARD */}
                      <div className="card border-0">
                        <div className="card-body px-3 py-2">
                          <h6 className="m-0 font-weight-bold text-gray-600">
                            Ketentuan saat membuat pesanan baru :
                          </h6>
                          <ul className="p-1 m-0">
                            <li>
                              Silahkan membuat pesanan sesuai langkah-langkah
                              diatas.
                            </li>
                            <li>
                              Jika ingin membuat pesanan dengan Target yang sama
                              dengan pesanan yang sudah pernah dipesan
                              sebelumnya, mohon menunggu sampai pesanan
                              sebelumnya selesai diproses.
                            </li>
                            <li>
                              Jika terjadi kesalahan / mendapatkan pesan gagal
                              yang kurang jelas, silahkan hubungi Kami melalui
                              halaman TIKET untuk informasi lebih lanjut.
                            </li>
                          </ul>
                        </div>
                      </div>
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
