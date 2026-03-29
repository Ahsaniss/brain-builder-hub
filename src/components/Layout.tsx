import { ReactNode, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div aria-hidden="true" className="site-ambient">
        <span className="ambient-ribbon ambient-ribbon-1" />
        <span className="ambient-ribbon ambient-ribbon-2" />
        <span className="ambient-ribbon ambient-ribbon-3" />
        <span className="ambient-ball ambient-ball-1" />
        <span className="ambient-ball ambient-ball-2" />
        <span className="ambient-ball ambient-ball-3" />
        <span className="ambient-ball ambient-ball-4" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
