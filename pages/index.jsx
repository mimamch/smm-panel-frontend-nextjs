import Head from "next/head";
import Wrapper from "../layouts/wrapper";

export async function getServerSideProps(context) {
  let isLogin = false;
  if (context.req.cookies.jwt) {
    isLogin = true;
  }
  return {
    props: {
      isLogin,
    },
  };
}
export default function Home(props) {
  return (
    <>
      <Head>
        <title>SMM Nusantara</title>
      </Head>
      <Wrapper isLogin={props.isLogin}></Wrapper>;
    </>
  );
}
