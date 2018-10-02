import React from "react";
import Wrapper from "./components/Wrapper";
import PandaCard from "./components/PandaCard";
import Title from "./components/Title";
import Score from "./components/Score";
//refernce a json file of all pandas cards info
import pandas from "./pandas.json";

class App extends React.Component {
  state = {
    userScore: 0,
    topScore: 0,
    selectedID: []
  };

  //function to render different images to the screen in a random order. 
  shuffleCards = () => {
    for (let i =0; i<pandas.length; i++) {
      let elem = pandas[i];
      let randomNum=Math.floor(Math.random() * pandas.length);
      pandas[i]=pandas[randomNum];
      pandas[randomNum]=elem;
    }
  }

  //Each image listens for click events.
  onClickfun = (id) => {
    console.log(id);
    console.log(this.state.selectedID);
    //keep track of the user's selected images and score
    //increment score if continue clicking different images
    if (!this.state.selectedID.includes(id)){
      this.setState({
        selectedID: this.state.selectedID.concat(id),
        userScore: this.state.userScore+1
        })
        console.log(this.state.userScore);
    }
    //user's score reset to 0 if they click the same image more than once.
    else {
      this.setState({
        selectedID: [],
        userScore: 0
        })
    }
    this.setTopScore();
    this.shuffleCards();
  }

  //for rendering cards on screen (to be called in render)
  createCards = () => {
    let cards = []
    for (let i = 0; i < 12; i++) {
      cards.push(<PandaCard
        id={pandas[i].id}
        key={pandas[i].id}
        name={pandas[i].name}
        image={pandas[i].image}
        onClickfun={this.onClickfun}
      />)
    }
    return cards
  }
  
  //keep track of the top score
  setTopScore = () => {
    if (this.state.userScore > this.state.topScore) {
      return this.setState({topScore: this.state.userScore})
    }
  }

  render() {

    return (
      <Wrapper>
        <Title>Pandas Clicky Game!</Title>
        <Score>Click on an image to earn points, but don't click on any more than once!</Score>
        <Score>Score: {this.state.userScore}</Score>
        <Score>Top Score: {this.state.topScore}</Score>
        {this.createCards()}
      </Wrapper>
    );
  };
}

export default App;
