import React from "react";
import CardBtn from "../CardBtn";
import "./Card.css";
// import styles from "./Card.css";

const Card = props => (

  <div

    className="card"
    value="0"
    style={{
      backgroundImage: `url(${props.image})`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `80%`
    }}

    onClick={
      props.handleBtnClick
    }
  >

  </div>
);





export default Card;
