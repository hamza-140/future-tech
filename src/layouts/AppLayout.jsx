import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import ConnectBanner from "./ConnectBanner";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
      <ConnectBanner />
      <Footer />
    </div>
  );
};

export default AppLayout;
