import Head from "next/head";
import React, { useState } from "react";
import Wrapper from "../../layouts/wrapper";

export default function DepositBaru() {
  const [tujuan, settujuan] = useState("");
  const [minimal, setminimal] = useState(0);
  const [jumlah, setjumlah] = useState(0);
  const [saldoDiterima, setsaldoDiterima] = useState(0);
  function buatDeposit(e) {
    e.preventDefault();
    try {
    } catch (error) {}
  }
  return (
    <Wrapper>
      <Head>
        <title>Isi Saldo Deposit</title>
      </Head>
      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Isi Saldo Deposit</h1>
        </div>

        <form onSubmit={buatDeposit}>
          <div className="form-group row">
            <div className="col-md-6">
              <label htmlFor="tujuan">Pilih Rekening</label>
              <select id="tujuan" className="form-control">
                <option>BCA (MANUAL)</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-6">
              <label htmlFor="minimal">Minimal Jumlah</label>
              <input
                type="text"
                id="minimal"
                className="form-control"
                value={"Rp. 10.000"}
                disabled
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-3">
              <div>
                <label htmlFor="nominal">Jumlah Deposit</label>
                <input
                  type="text"
                  id="nominal"
                  className="form-control"
                  placeholder="10000"
                />
              </div>
            </div>
            <div className="form-group col-md-3">
              <div>
                <label htmlFor="saldoDidapat">Saldo Yang Diterima</label>
                <input
                  type="text"
                  id="saldoDidapat"
                  className="form-control"
                  value={"Rp. 10.000"}
                  disabled
                />
              </div>
            </div>
          </div>
          <button className="btn btn-dark" type="submit">
            Buat Deposit
          </button>
        </form>
      </div>
    </Wrapper>
  );
}
