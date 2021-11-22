import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Routes from "../routes/Routes";

export default function Layout() {
  return (
    <main className="">
      <Header />
      <div className="dark:bg-gray-500 flex-1 bg-gray-100">
        <Routes />
      </div>
      <Footer />
    </main>
  );
}
