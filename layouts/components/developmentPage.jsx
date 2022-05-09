import Head from "next/head";
import Link from "next/link";

export default function DevelopmentPage(props) {
  return (
    <div className="diverrorpage">
      <Head>
        <title>{props.title || "Maaf 😫"}</title>
      </Head>
      <style jsx>
        {`
          .diverrorpage {
            font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI",
              "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif;
            height: 100vh;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #000;
          }
          .next-error-h1 {
            border-right: 1px solid rgba(0, 0, 0, 0.3);
            display: inline-block;
            margin: 0;
            margin-right: 20px;
            padding: 10px 23px 10px 0;
            font-size: 24px;
            font-weight: 500;
            vertical-align: top;
          }
        .div2 {
              display: inline-block;
              text-align: left;
              line-height: 49px;
              height: 49px;
              vertical-align: middle;
            }

        .errorh2 {
              font-size: 14px;
              font-weight: normal;
              line-height: inherit;
              margin: 0;
              padding: 0;
            }
          }
        `}
      </style>
      <div>
        <h1 className="next-error-h1">Maaf 😫</h1>
        <div className="div2">
          <h2 className="errorh2">Halaman ini sedang dalam proses pembuatan</h2>
        </div>
      </div>
      <Link href="/">
        <a className="text-center text-gray-800 mt-5">👈 Kembali Ke Beranda</a>
      </Link>
    </div>
  );
}
