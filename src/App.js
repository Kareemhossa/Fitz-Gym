import React from "react";
import "./App.css";
// import MultiStepForm from "./Componant/MultiStepForm/MultiStepForm";
import Navbar from "./Componant/Header/Navbar";
import SectionHeder from "./Componant/Header/SectionHeder";
import About from "./Componant/Main/About";
import Services from "./Componant/Main/Services";
import Trainer from "./Componant/Main/Trainer";
import Result from "./Componant/Main/Result";
import FeedBack from "./Componant/Main/FeedBack";
import ContactUs from "./Componant/Footer/ContactUs";
import Footer from "./Componant/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <SectionHeder />
      <About />
      <Trainer />
      <Services />
      <Result />
      <FeedBack />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;

//
//
