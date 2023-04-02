import React, { Component } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Example from "./Example";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      country: "Ukraine",
    };
  }

  switch = () => {
    if (this.state.country === "Ukraine") {
      this.setState({ country: "Ukraine is the best country" });
    } else {
      this.setState({ country: "Ukraine" });
    }
  };

  render() {
    return (
      <div>
        <Header />
        <main>
          <Navigation />
          <Content>
            <button className="button" onClick={this.switch}>
              Switch
            </button>
            <Example country={this.state.country} />
          </Content>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
