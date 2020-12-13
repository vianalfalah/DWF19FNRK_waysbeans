import React, { Component } from "react";
import Header from "./../../elements/Header/Header";
import "./Home.css";
import waysLg from "./../../assets/ways-lg.svg";
import backImg from "./../../assets/back-img.png";
import waves from "./../../assets/waves.svg";
import ListP from "./ListP";

function Home() {
  return (
    <div>
      <Header />
      <div className="jumbotron back1">
        <span>
          <img className="ways" src={waysLg} alt="" />
        </span>
        <div className="desc">
          <p className="best">BEST QUALITY COFFEE BEANS</p>
          <p className="quality">
            Quality freshly roasted coffee made just for you. Pour, brew and
            enjoy
          </p>
        </div>
        <div className="waves-box">
          <img className="waves" src={waves} alt="" />
        </div>
        <div className="">
          <img className="back2" src={backImg} alt="" />
        </div>
      </div>
      <div
        style={{ marginTop: "123px", marginBottom: "51px", marginLeft: 100 }}
      >
        <div className="d-flex justify-content-center">
          <ListP />;
        </div>
      </div>
    </div>
  );
}

export default Home;
