import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";
//import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";

import "./app.css";

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    error: false,
    selectedItem: null,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  onSelectedItem = (id) => {
    this.setState({
      selectedItem: id,
    });
    /* console.log(numb); */
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    if (this.state.error) {
      return <ErrorIndicator />;
    }

    return (
      <div className="stardb-app">
        <Header />
        {planet}

        <div className="row mb2 button-row">
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}
          >
            Toggle Random Planet
          </button>
          <ErrorButton />
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            {/*  <ItemList onSelectedItem={this.onSelectedItem} /> */}
          </div>
          <div className="col-md-6">
            <PersonDetails selectedItem={this.state.selectedItem} />
          </div>
        </div>
      </div>
    );
  }
}
