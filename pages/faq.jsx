import Head from "next/head";
import Link from "next/link";
import DevelopmentPage from "../layouts/components/developmentPage";
import Wrapper from "../layouts/wrapper";

export default function Faq() {
  return (
    <Wrapper isHome hideSidebar>
      <Head>
        <title>Pertanyaan Umum - Nusantara SMM</title>
        <meta
          name="title"
          content="Pertanyaan Umum - Nusantara SMM"
          key="title"
        />
        <meta
          key="description"
          name="description"
          content="Pertanyaan yang sering diajukan oleh banyak orang, cari pertanyaan Anda disini."
        />
      </Head>
      <div className="container">
        <div
          style={{ marginBottom: "7em" }}
          className="row mt-7 justify-content-center "
        >
          <div className="col-12 col-md-9 text-gray-600">
            <div className="card" data-aos="slide-up">
              <div className="card-header">Pertanyaan Umum</div>
              <div className="card-body">
                <ul className="list-group list-unstyled">
                  <li>
                    <div className="card mb-2">
                      <div className="card-body">
                        <h5 className="card-title font-weight-bold">
                          Apa itu Pending ?
                        </h5>
                        <p className="card-text">
                          Pending adalah pesanan/deposit sedang dalam antian di
                          server
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card mb-2">
                      <div className="card-body">
                        <h5 className="card-title font-weight-bold">
                          Apa itu Success ?
                        </h5>
                        <p className="card-text">
                          Success adalah pesanan telah berhasil
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card mb-2">
                      <div className="card-body">
                        <h5 className="card-title font-weight-bold">
                          Apa itu Failed ?
                        </h5>
                        <p className="card-text">
                          Failed adalah pesanan telah Gagal
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card mb-2">
                      <div className="card-body">
                        <h5 className="card-title font-weight-bold">
                          Apa itu Garansi Refill ?
                        </h5>
                        <p className="card-text">
                          Refill adalah isi ulang. Jika anda membeli layanan
                          refill dan ternyata dalam beberapa hari followers
                          berkurang, maka akan otomatis di refill/di isi ulang.
                          Tapi harap di ketahui, Server hanya akan mengisi ulang
                          jika followers yang berkurang adalah followers yang di
                          beli dengan layanan refill.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card mb-2">
                      <div className="card-body">
                        <h5 className="card-title font-weight-bold">
                          Apa Penyebab Followers Berkurang ?
                        </h5>
                        <p className="card-text">
                          <p>
                            Followers aktif : berkurang karena mereka unfollow
                            akun anda, karena mungkin ingin mengurangi jumlah
                            following atau mereka tidak suka dengan akun anda
                            sehingga mereka unfollow.
                          </p>
                          <p>
                            Bot/Followers pasif : berkurang karena dihapus
                            langsung oleh pihak instagram. perlu anda ketahui,
                            instagram sering sekali melakukan penghapusan akun
                            yang dianggapnya tidak aktif minimalnya 1x dalam 1
                            minggu. Karena followers anda telah dihapus oleh
                            instagram, maka secara tidak langsung followers anda
                            berkurang.
                          </p>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card mb-2">
                      <div className="card-body">
                        <h5 className="card-title font-weight-bold">
                          Tentang Estimasi Kecepatan Pengiriman
                        </h5>
                        <p className="card-text">
                          <p>
                            [Instant] = Pengiriman Instan Setelah Order Akan
                            Langsung Dikirim dan Masuk (Paling Lama 10 Menit)
                            Kecuali seperti Followers atau Subscribers butuh
                            lebih lama.
                          </p>
                          <p>
                            [Fast] = Pengiriman Cepat Membutuhkan Waktu Paling
                            Lama 1-24 Jam untuk Diselesaikan
                          </p>
                          <p>
                            [Slow] = Membutuhkan Proses Untuk Pengiriman.
                            Estimasi 24-48 Jam Paling Lama Untuk Selesai.
                          </p>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card mb-2">
                      <div className="card-body">
                        <h5 className="card-title font-weight-bold">
                          Syarat Sebelum Menggunakan Layanan
                        </h5>
                        <p className="card-text">
                          Harap Perhatikan Pastikan Akun Sosial Media yang akan
                          Anda Submit seperti Facebook, Instagram, Twitter dan
                          lainnya Privasi di Setting ke Publik. Jangan Kunci
                          Akun Sosial Media dan ubah status kiriman ke Publik
                          agar Like atau Followers bisa masuk.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card mb-2">
                      <div className="card-body">
                        <h5 className="card-title font-weight-bold">
                          Penjelasan Jumlah Min/Max di setiap Paket.
                        </h5>
                        <p className="card-text">
                          Jumlah Min adalah Jumlah Minimal atau Paling sedikit
                          yang dapat di pesan di paket tersebut <br /> dan max
                          adalah jumlah maksimal atau paling banyak yang dapat
                          di pesan di paket tersebut. <br /> Perlu diperhatikan
                          khusus untuk jenis Followers, Subscribers, atau Likers
                          berlaku jumah max atau kuota paling banyak yang dapat
                          di order untuk satu target. <br /> Jika sebelumnya
                          sebuah Akun atau Target sudah order dan total telah
                          mencapai jumlah max/kuota terbanyak di Paket tersebut.{" "}
                          <br /> Silahkan gunakan paket lainnya agar order tetap
                          berjalan dan lancar. <br /> Cek juga di bagian
                          deskripsi karena ada jumlah max order bukan max yang
                          dipesan untuk akun tersebut.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card mb-2">
                      <div className="card-body">
                        <h5 className="card-title font-weight-bold">
                          Apakah Order yang telah dikirim bisa dibatalkan?
                        </h5>
                        <p className="card-text">
                          Tidak bisa. Semua order yang telah dikirim akan
                          langsung diproses oleh Server kami. Tidak ada
                          pembatalan kecuali statusnya gagal dan apabila masih
                          pending anda bisa mengajukan pembatalan ke admin. Oleh
                          karena itu kami tekankan untuk memastikan bahwa semua
                          data benar sebelum melakukan Order. <br /> *Harap baca
                          <Link href="/syarat-dan-ketentuan">
                            <a className="text-dark">
                              {" "}
                              <u>Ketentuan Layanan</u>
                            </a>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
