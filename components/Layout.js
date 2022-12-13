import Head from "next/head";
import Link from "next/link";
import React from "react";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + "-Amazona" : "Amazona"}</title>
        <meta name="description" content="ecommerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" flex min-h-screen flex-col justify-between ">
        <header>
        <nav className="flex h-12 justify-between items-center px-4 shadow-md ">
            <Link href="/" className="text-lg font-bold">
           Chrinmat
            </Link>
        
        <div>
         <Link href="/cart" className="p-2">Cart</Link>
         <Link href="/login" className="p-2">Login</Link>

        </div>

          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>

        <footer className="flex h-10 items-center shadow-inner justify-center">
            <p> Copyright 2022  Chrinmat</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
