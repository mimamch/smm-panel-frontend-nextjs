import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Wrapper from "../../layouts/wrapper";

export const getServerSideProps = async () => {
  try {
    const announcements = await axios.get(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT2}/announcements`
    );

    return {
      props: { announcements: announcements.data.data },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { announcements: [] },
    };
  }
};

export default function Announcements(props) {
  const router = useRouter();
  const [title, settitle] = useState("");
  const [text, settext] = useState("");
  const [announcements, setAnnouncements] = useState(props.announcements);
  const tambah = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT2}/announcements`,
        {
          title,
          text,
        }
      );
      setAnnouncements([data.data.data, ...announcements]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <Head>
        <title>Pengumuman - Admin</title>
      </Head>
      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Daftar Pengumuman</h1>
        </div>
        <div className="card shadow mb-4">
          <div className="card-header">
            <h6 className="m-0 font-weight-bold text-primary">
              Tambah Pengumuman
            </h6>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-6">
                <form onSubmit={tambah}>
                  <div className="form-group">
                    <label htmlFor="title">Tambahkan Judul</label>
                    <input
                      onChange={(e) => settitle(e.target.value)}
                      id="title"
                      type="text"
                      placeholder="Judul"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="text">Tambahkan Text</label>
                    <input
                      onChange={(e) => settext(e.target.value)}
                      id="text"
                      type="text"
                      placeholder="Isi Pengumuman"
                      className="form-control"
                    />
                  </div>
                  <button type="submit" className="btn btn-dark">
                    TAMBAH
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">PENGUMUMAN</h6>
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
                    <th>Judul</th>
                    <th>Isi</th>
                    <th>Aksi</th>
                  </tr>
                </thead>

                <tbody>
                  {announcements.map((e) => (
                    <tr key={e._id}>
                      <td>{e.title}</td>
                      <td>{e.text}</td>
                      <td>
                        <button
                          onClick={async () => {
                            await axios.delete(
                              `${process.env.NEXT_PUBLIC_API_ENDPOINT2}/announcements`,
                              { data: { id: e._id } }
                            );
                            const data = await axios.get(
                              `${process.env.NEXT_PUBLIC_API_ENDPOINT2}/announcements`
                            );
                            setAnnouncements(data.data.data);
                          }}
                          className="btn btn-danger btn-sm"
                        >
                          <i className="fas fa-trash"></i> Hapus
                        </button>
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
