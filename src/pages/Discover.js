import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import images from "../components/Images/Images.js";
import Alert from "../components/Alert";
//var Shuffle = require('react-shuffle');
// console.log(images)
class Discover extends Component {
  state = {
    image: "",
    matchCount: 0,
    match: 0,
    url: images


  };



  // When the component mounts, load the next dog to be displayed
  componentDidMount() {

    this.loadNextDog();
  }

  handleBtnClick = event => {

    function shuffle(array, state) {
      var currentIndex = array.length, temporaryValue, randomIndex;
      let myUrl = event.target.attributes.getNamedItem("style").value.split(":")[1].split(";")[0].trim()
      myUrl = myUrl.slice(5, -2);
      for (let i = 0; i < array.length; i++) {
        if (array[i].image == myUrl) {
          let changeValue = array[i].text = Number(array[i].text) + 1
          if (changeValue > 1) {
            alert("You Lost!");
            state.match = 0;
            // state.matchCount = state.matchCount;


          }
          else {
            alert("You Won!");
            let addWin = state.match = state.match + 1;
            if (addWin > state.matchCount) {
              state.matchCount = state.matchCount + 1;
            }
          }
        }
      }
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    let clickNumber = Number(event.target.attributes.getNamedItem("value").value) + 1;
    let buttonValue = event.target.attributes.getNamedItem("value").value = clickNumber;
    buttonValue = Number(buttonValue) % 2;
    let crap = shuffle(images, this.state);

    this.loadNextDog();
  };


  loadNextDog = () => {
    API.getRandomDog()
      .then(res =>
        this.setState({
          image: res.data.message
        })
      )
      .catch(err => console.log(err));
  };

  render() {

    return (
      <div>

        <h1 className="text-center">Clicky Game</h1>
        <h3 className="text-center">
          Score:<span className="score">{this.state.match}</span>| Top Score:<span className="Top-Score">{this.state.matchCount}</span>
        </h3>

        <div className="board-row grid-container">
          {images.map((image, idx) => <Card image={image.image} handleBtnClick={this.handleBtnClick} key={`img-${idx}`} />)}
        </div>
        <h1 className="text-center">
          Some text about this game!
        </h1>
        <Alert style={{ opacity: this.state.match ? 1 : 0 }} type="success">
          Yay! That Pup Liked You Too!!!
        </Alert>
      </div>
    );
  }
}


export default Discover;
