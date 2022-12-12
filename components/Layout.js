import Head from "next/head";
import React from "react";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + "-Amazona" : "Amazona"}</title>
        <meta name="description" content="ecommerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" flex min-h-screen flex-col justify-between">
        <header>header</header>
        <main>{children}</main>

        <footer>footer</footer>
      </div>
    </>
  );
};

export default Layout;
