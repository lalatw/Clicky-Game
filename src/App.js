import React from "react";
import Wrapper from "./components/Wrapper";
import PandaCard from "./components/PandaCard";
import Title from "./components/Title";
import Score from "./components/Score";
import pandas from "./pandas.json";

class App extends React.Component {
  state = {
    userScore: 0,
    topScore: 0,
    selectedID: []
  };

  shuffleCards = () => {
    for (let i =0; i<pandas.length; i++) {
      let elem = pandas[i];
      let randomNum=Math.floor(Math.random() * pandas.length);
      pandas[i]=pandas[randomNum];
      pandas[randomNum]=elem;
    }
  }

  onClickfun = (id) => {
    console.log(id);
    console.log(this.state.selectedID);
    if (!this.state.selectedID.includes(id)){
      this.setState({
        selectedID: this.state.selectedID.concat(id),
        userScore: this.state.userScore+1
        })
        console.log(this.state.userScore);
    }
    else {
      this.setState({
        selectedID: [],
        userScore: 0
        })
    }
    this.setTopScore();
    this.shuffleCards();
  }

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
  

  setTopScore = () => {
    if (this.state.userScore > this.state.topScore) {
      return this.setState({topScore: this.state.userScore})
    }
  }

  render() {

    return (
      <Wrapper>
        <Title>Pandas</Title>
        <Score>Score: {this.state.userScore}</Score>
        <Score>Top Score: {this.state.topScore}</Score>
        {this.createCards()}
      </Wrapper>
    );
  };
}

export default App;
