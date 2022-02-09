import React from "react";
import Header from "./Header";
import MarketScheduleControl from "./MarketScheduleControl";
import SeasonalProduceControl from "./SeasonalProduceControl";
import Container from "react-bootstrap/Container";

function App(){
  return (
    <React.Fragment>
      <Header/>
      <Container>
        <MarketScheduleControl/>
        <SeasonalProduceControl/>
      </Container>
    </React.Fragment>
  );
}

export default App;