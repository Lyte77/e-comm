import React from "react";
import Navbar from "./components/Navbar/Navbar";
import SliderComponent from "./components/SliderComponent";
import CompanyServices from "./components/CompanyServices";
import MobileComponent from "./components/Mobile";
import WatchesComponent from "./components/Watches";
import YearlySale from "./components/YearlySale";
import BlogSection from "./components/BlogSection";
import TestimonialComponent from "./components/Testimonials";
import SubscriberComponent from "./components/Subscribe";
import InstaComponent from "./components/Instagram";
import FooterComponent from "./components/Footer";
import FooterBottom from "./components/FooterBottom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';





function App(){
  return(
    <div className="App">
        <Navbar />  
        <SliderComponent />
        <CompanyServices />
        <MobileComponent />
        <WatchesComponent />
        <YearlySale />
        <BlogSection />
        <TestimonialComponent />
        <SubscriberComponent />
        <InstaComponent />
        <FooterComponent />
        <FooterBottom />

    </div>
  )
}

export default App