import React, { Component } from "react";
import "./Component.css";
import Subnav from '../components/Subnav';

class Explorehead extends Component {
  render() {
    return (
      <div>
        <h2 className="explorehead hey">I build cool things with cool people.</h2>
				<div className="explorehead moving"><Subnav /><br /></div>
      </div>
    );
  }
}

export default Explorehead;