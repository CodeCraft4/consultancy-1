import Navbar from "components/Navbar";
import React from "react";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Footer from "components/Footer";
// import Contact from "./components/Contact";
import WorkingProcess from "./components/WorkingProcess";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Summary />
      <WorkingProcess />
      {/* <Contact/> */}
      <Footer />
    </React.Fragment>
  );
};

export default Home;
