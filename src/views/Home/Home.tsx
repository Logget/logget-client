import React from "react";
import "./home.scss";
import logo from "../../assets/img/logo.svg";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <div className="home">
      <div className="logo">
        <img src={logo} alt="logget" />
        <span className="title">Logget</span>
      </div>

      <div className="desc">Time tracker You won't Forget to run</div>
    </div>
  );
};
