import React from "react";
import { Link, withRouter } from "react-router-dom";
//style
import '../style/sass/components/header.scss';

const Header = props => {
  return (
    <div>
    <header className="header">
      <div className="triangle first"></div>
      <div className="triangle second"></div>

      <svg width='0' height='0'>
      <defs>
      <clipPath id="cp" clipPathUnits="objectBoundingBox">
      <path d="M0.500, 0.945 L0.994, 0.090 L0.006, 0.090 L0.500, 0.945 L0.500, 0.650 L0.262, 0.238 L0.738, 0.237 L0.500, 0.650z"></path>
      </clipPath>
      </defs>
      </svg>

      <div className="text-box">
        <h1 className="heading-primary">
          <span>Bounce</span>
        </h1>
          <a
            href="/webplayer"
            className="btn btn-white btn-animated"
          >
          Discover Music
          </a>
      </div>

    </header>

  </div>
  );
};

export default withRouter(Header);
