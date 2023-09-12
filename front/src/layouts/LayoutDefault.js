import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const LayoutDefault = ({ children }) => (
  // <>
  <div
    style={{
      backgroundImage: "url(assets/images/background.jpg)",
      width: "100%",
      height: "100%",
      // width: "100vw",
      // height: "100vh",
      display: "flex",
      // overflow: "scroll",
      // position: "fixed",
      flexDirection: "column",
      // flex: "1 0 atuo",
      // zIndex: "-1",
    }}
  >
    {/* 상단 헤더 */}
    <Header navPosition="right" className="reveal-from-bottom" />
    <main style={{ zIndex: 2 }} className="site-content">
      {children}
    </main>

    {/* 배너는 하단에 띄워놓는 플로팅 배너 */}
    {/* <Banner /> */}

    {/* 푸터는 맨 밑에 contact, about us, 등 들어 있는 곳 */}
    <Footer />
  </div>

  // </>
);

export default LayoutDefault;
