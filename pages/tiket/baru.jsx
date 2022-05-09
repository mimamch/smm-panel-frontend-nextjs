import Head from "next/head";
import React, { useState } from "react";
import Wrapper from "../../layouts/wrapper";

export default function DepositBaru() {
  const [tujuan, settujuan] = useState("");
  const [minimal, setminimal] = useState(0);
  const [jumlah, setjumlah] = useState(0);
  const [saldoDiterima, setsaldoDiterima] = useState(0);
  function buatTiket(e) {
    e.preventDefault();
    try {
    } catch (error) {}
  }
  return (
    <Wrapper>
      <Head>
        <title>Kirim Tiket</title>
      </Head>
      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Kirim Tiket</h1>
        </div>

        <form onSubmit={buatTiket}>
          <div className="form-group row">
            <div className="col-md-6">
              <label htmlFor="Subjek">Subjek</label>
              <input
                type="text"
                id="Subjek"
                className="form-control"
                placeholder="Isi Judul Tiket"
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-6">
              <label htmlFor="pesan">Kendala</label>
              <textarea
                className="form-control"
                id="pesan"
                rows="5"
                placeholder="Isi Kendala Anda..."
              ></textarea>
            </div>
          </div>

          <button className="btn btn-dark" type="submit">
            Kirim Tiket
          </button>
        </form>
      </div>
    </Wrapper>
  );
}
