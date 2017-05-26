import React, { Component } from "react";
import Container from "./Container";
import Menu from "./Menu";
import "./App.css";
import Header from "./Header";
import Features from "./Features";

const myFeatures = [
  {
    title: "Feature Label",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    title: "Feature Label",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    title: "Feature Label",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    title: "Feature Label",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Container>
          <Header />
          <Features items={myFeatures} />
        </Container>
      </div>
    );
  }
}

export default App;
