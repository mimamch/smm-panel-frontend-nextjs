import Head from "next/head";
import DevelopmentPage from "../layouts/components/developmentPage";
import Wrapper from "../layouts/wrapper";

export default function Sk() {
  return (
    <Wrapper isHome hideSidebar>
      <Head>
        <title>Syarat Dan Ketentuan - Nusantara SMM</title>
        <meta
          name="title"
          content="Syarat Dan Ketentuan - Nusantara SMM"
          key="title"
        />
        <meta
          key="description"
          name="description"
          content="Baca dan pahami setiap ketentuan yang Kami tetapkan untuk kenyamanan dan kelancaran setiap transaksi Anda."
        />
      </Head>
      <div className="container">
        <div
          style={{ marginBottom: "7em" }}
          className="row mt-7 justify-content-center "
        >
          <div className="col-12 col-md-9">
            <div className="card">
              <div className="card-header">Syarat Dan Ketentuan SMM</div>
              <div className="card-body">
                <ol>
                  <li>
                    {" "}
                    <h4>Umum</h4>
                    Dengan mendaftar dan menggunakan layanan Kami secara
                    otomatis anda menyetujui semua ketentuan yang kami buat.
                    Ketentuan bisa saja berubah sewaktu-waktu tanpa
                    pemberitahuan terlebih dahulu.
                  </li>
                  <li>
                    {" "}
                    <h4>Harga</h4>
                    Harga yang kami tawarkan dapat berubah sewaktu-waktu. Dengan
                    pemberitahuan atau tanpa pemberitahuan.
                  </li>
                  <li>
                    {" "}
                    <h4>Pemesanan</h4>
                    <ul>
                      <li>
                        Pesanan yang sudah di input tidak dapat di batalkan.
                      </li>
                      <li>
                        Waktu pengerjaan yang kami lampirkan di deskripsi
                        hanyalah perkiraan, bisa lebih cepat juga bisa lebih
                        lambat.
                      </li>
                      <li>
                        Deskripsi pada setiap layanan hanya sebuah perkiraan
                      </li>
                      <li>
                        Jumlah order yang ada pada nama, hanya sebuah perkiraan
                        Orderan yang berkurang setelah sukses bukan tanggung
                        jawab kami jika sudah melebihi masa garansi
                      </li>
                      <li>
                        Kami tidak dapat membatalkan pesanan yang sudah di order
                      </li>
                      <li>
                        Kesalahan memasukan link target/username sepenuhnya
                        tanggung jawab pengguna.
                      </li>{" "}
                      <li>
                        Untuk pesanan layanan bergaransi, garansi refill hanya
                        sesuai yang ada pada keterangan layanan, contoh :
                        <ol>
                          <li>Garansi/refill 30 hari.</li>
                          <li>
                            {" "}
                            Maka jika sebelum masa garansi habis ( contoh 30
                            hari) dan anda mengganti username/menghapus link,
                            maka pesanan tidak dapat direfill/diisi ulang.
                          </li>
                          <li>
                            <p>
                              Pesanan salah target akan mendapatkan ketentuan
                              sebagai berikut :
                            </p>
                            <ul>
                              <li>No refill no Refund</li>
                              <li>
                                Tidak ada pengembalian dana apapun kecuali
                                pesanan error.
                              </li>
                              <li>
                                Tidak bisa dipercepat atau minta cancel atau
                                minta refund.
                              </li>
                              <li>
                                Pesanan salah target jika melebihi 1 bulan tanpa
                                error, akan tersukseskan otomatis.
                              </li>
                            </ul>
                          </li>
                        </ol>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4>Akun</h4>
                    Jika anda mengalami kendala saat login atau lupa password,
                    silahkan hubungi Whatsapp kami di{" "}
                    <a
                      href="https://wa.me/6285838707828"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark"
                    >
                      <u>+6285838707828</u>
                    </a>
                    <p>
                      {" "}
                      Kelalaian merahasiakan password akun ada sepenuhnya
                      tanggung jawab anda
                    </p>
                  </li>
                  <li>
                    {" "}
                    <h4>Saldo</h4> Tidak ada pengembalian uang yang akan
                    dilakukan ke metode pembayaran Anda. Setelah deposit
                    selesai, tidak ada cara untuk mengembalikannya. <br /> Jika
                    melakukan kesalahan mengisi deposit dan tidak ada konfirmasi
                    selama 24jam, kami menganggap dana tersebut adalah donasi.
                    <br /> Anda setuju bahwa setelah Anda menyelesaikan
                    pembayaran, Anda tidak akan mengajukan sengketa atau tagihan
                    balik kepada kami karena alasan apa pun.
                  </li>
                  <li>
                    <h4>Tanggung Jawab</h4>
                    <ul>
                      <li>
                        Kami sama sekali tidak bertanggung jawab atas kerugian
                        yang mungkin terjadi pada bisnis anda.{" "}
                        <li>
                          SmmAgen .com tidak bertanggung jawab jika terjadi
                          penanguhan akun,penghapusan foto atau video atau
                          bahkan pembokiran akun sosial media anda.
                        </li>
                        <li>
                          Kami tidak bertanggung jawab atas penyalahgunaan
                          layanan yang kami sediakan.
                        </li>
                        <li>
                          Kami tidak bertanggung jawab mengisi ulang
                          followers/subscribe/like pada pesanan yang diubah
                          username/linknya selama masa garansi belum berakhir.
                        </li>
                        <li>
                          Kami tidak bertanggung jawab atas kesalahan input
                          target yang dilakukan oleh pengguna.
                        </li>{" "}
                        <li>
                          Kami tidak akan mengisi ulang jika followers/like yang
                          anda pesan berkurang/unfollow setelah pesanan sukses.
                        </li>
                        <li>
                          Kami dapat menghentikan layanan kapanpun tanpa
                          pemberitahuan terlebih dahulu{" "}
                        </li>{" "}
                        <li>Kami di bebaskan dari segala tuntutan hukum</li>
                      </li>
                    </ul>
                  </li>
                  <li>
                    {" "}
                    <h4>Layanan</h4>
                    <ul>
                      <li>
                        Kami hanya untuk sarana promosi. Hanya untuk membatu
                        meningkatkan "penampilan" Akun sosial media anda.
                      </li>
                      <li>
                        Kami tidak dapat memastikan pengikut baru anda akan
                        berinteraksi dengan anda
                      </li>
                      <li>
                        Kami tidak menjamin followers/like target negara 100%
                        sesuai target.
                      </li>
                      <li>
                        ➢Jika followers tidak masuk dalam waktu yang di
                        tentukan, silahkan kirim tiket untuk request mempercepat
                        atau refound.
                      </li>
                      <li>
                        Kami hanya menjamin anda akan mendapatkan pengikut
                        sesuai yang anda bayar
                      </li>
                      <li>
                        Kami tidak menjamin 100% akun kami memiliki gambar
                        profil atau bio yang lengkap.
                      </li>
                      <li>
                        ➢SmmAgen .com tidak akan mengembalikan saldo jika anda
                        salah memesan. Pastikan anda memasukan data yang benar
                        sebelum memesan layanan.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4>Reseller</h4>
                    <ul>
                      <li>
                        Anda dapat menjual kembali semua layanan yang ada di
                        Kami dengan ketentuan layanan kami
                      </li>
                      <li>
                        Jika anda mengalami permasalahan dengan pelanggan anda,
                        kami hanya mempunyai tanggung jawab (sesuai ketentuan
                        layanan) Dengan anda (bukan pelanggan anda)
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
