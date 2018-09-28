import React from "react";
import "./Hero.css";

const Hero = props => (

  // < div className="hero text-center"

  //   style={{
  //     backgroundImage: `url(${props.image})`,
  //     backgroundRepeat: `no-repeat`,
  //     backgroundSize: `80%`
  //   }}>

  //   {props.children}

  // </div >
  <div

    className="hero text-center"
    style={{

      backgroundImage: `url(${props.image})`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `80%`,
      backgroundPositionY: '40px',
      opacity: 0.5
    }}

  >
    {props.children}
  </div>

);

export default Hero;
