import Head from "next/head";
import BottomNav from "./BottomNav";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title> {title} </title>
      </Head>
      {children}
      <BottomNav/>
    </>
  );
};

export default Layout;