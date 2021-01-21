import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Navbar from "./Components/Navbar";
import "./Assets/Style.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import Home from "./Components/Home";
import loadingsvg from "./Assets/developer.svg";

function App() {
  const [portfoliodata, setPortfoliodata] = useState();
  useEffect(() => {
    axios("https://gitconnected.com/v1/portfolio/gowtham369").then(
      (response) => {
        setPortfoliodata(response.data);
        console.log(response);
      }
    );
  }, []);
  if (!portfoliodata)
    return <img src={loadingsvg} alt="Loading Logo" className="loadingsvg" />;
  if (portfoliodata)
    return (
      <div className="App">
        <Navbar navbar={portfoliodata.basics.profiles} />
        <div className="sub-App">
          <Home home={portfoliodata.basics} />
          <About about={portfoliodata} />
          <Education education={portfoliodata.education} />
          <Contact />
        </div>
      </div>
    );
}

export default App;
