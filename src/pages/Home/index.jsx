import Navbar from "components/Navbar";
import React from "react";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Footer from "components/Footer";
// import Contact from "./components/Contact";
import WorkingProcess from "./components/WorkingProcess";
import WhatsAppCom from "components/WhatsAppCom";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Summary />
      <WorkingProcess />
      {/* <Contact/> */}
      <Footer />
      <WhatsAppCom/>
    </React.Fragment>
  );
};

export default Home;
