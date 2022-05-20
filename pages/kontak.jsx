import Head from "next/head";
import DevelopmentPage from "../layouts/components/developmentPage";
import Wrapper from "../layouts/wrapper";

export default function Kontak() {
  return (
    <Wrapper isHome hideSidebar>
      <Head>
        <title>Kontak Kami</title>
        <meta name="title" content="Kontak Kami - Nusantara SMM" key="title" />
        <meta
          key="description"
          name="description"
          content="Layanan Kontak 24 Jam, Siap Membantu Disetiap Anda Memiliki Masalah Pada Layanan Kami."
        />
      </Head>
      <div className="container">
        <div
          style={{ marginBottom: "7em" }}
          className="row mt-7 justify-content-center "
        >
          <div className="col-12 col-md-9">
            <div className="card" data-aos="slide-right">
              <div className="card-header">Kontak</div>
              <div className="card-body">
                <ul className="list-group list-unstyled">
                  <li>
                    <div className="card mb-2">
                      <div className="card-body">
                        <h5 className="card-title font-weight-bold">
                          Facebook
                        </h5>
                        <p className="card-text">
                          <a
                            href="https://facebook.com/mimamch28"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark"
                          >
                            <u>Muhammad Imam Choirudin</u>
                          </a>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card mb-2">
                      <div className="card-body">
                        <h5 className="card-title font-weight-bold">
                          Whatsapp
                        </h5>
                        <p className="card-text">
                          <a
                            href="https://wa.me/6285838707828"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark"
                          >
                            <u>+6285838707828</u>
                          </a>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card mb-2">
                      <div className="card-body">
                        <h5 className="card-title font-weight-bold">
                          Telegram
                        </h5>
                        <p className="card-text">
                          <a
                            href="https://t.me/mimamch28"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark"
                          >
                            <u>@mimamch28</u>
                          </a>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card mb-2">
                      <div className="card-body">
                        <h5 className="card-title font-weight-bold">Email</h5>
                        <p className="card-text">
                          <a
                            href="mailto:mimamch28@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark"
                          >
                            <u>mimamch28@gmail.com</u>
                          </a>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card mb-2">
                      <div className="card-body">
                        <h5 className="card-title font-weight-bold">
                          Instagram
                        </h5>
                        <p className="card-text">
                          <a
                            href="https://instagram.com/mimamch_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark"
                          >
                            <u>@mimamch_</u>
                          </a>
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
