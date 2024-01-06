import React from "react";
import Navbar from "./components/Navbar/Navbar";
import SliderComponent from "./components/SliderComponent";
import CompanyServices from "./components/CompanyServices";
import MobileComponent from "./components/Mobile";
import WatchesComponent from "./components/Watches";
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
    </div>
  )
}

export default App