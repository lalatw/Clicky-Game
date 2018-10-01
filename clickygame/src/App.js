import React from "react";
import Wrapper from "./components/Wrapper";
import PandaCard from "./components/PandaCard";
import Title from "./components/Title";
import pandas from "./pandas.json";

const App = () => (
  <Wrapper>
    <Title>Pandas</Title>
    <PandaCard
      name={pandas[0].name}
      image={pandas[0].image}
    />
    <PandaCard
      name={pandas[1].name}
      image={pandas[1].image}
    />
    <PandaCard
      name={pandas[2].name}
      image={pandas[2].image}
    />
        <PandaCard
      name={pandas[3].name}
      image={pandas[3].image}
    />
        <PandaCard
      name={pandas[4].name}
      image={pandas[4].image}
    />
        <PandaCard
      name={pandas[5].name}
      image={pandas[5].image}
    />
        <PandaCard
      name={pandas[6].name}
      image={pandas[6].image}
    />
        <PandaCard
      name={pandas[7].name}
      image={pandas[7].image}
    />
        <PandaCard
      name={pandas[8].name}
      image={pandas[8].image}
    />
        <PandaCard
      name={pandas[9].name}
      image={pandas[9].image}
    />
        <PandaCard
      name={pandas[10].name}
      image={pandas[10].image}
      />
        <PandaCard
      name={pandas[11].name}
      image={pandas[11].image}
      />
  </Wrapper>
);

export default App;
