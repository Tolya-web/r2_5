import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";
//import ItemList from "../item-list/item-list";
import {
  PersonList,
  PersonDetails,
  PlanetList,
  PlanetDetails,
} from "../sw-components";
//import PersonDetails from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";
import Row from "../row/row";
import ErrorBoundry from "../error-boundry/error-boundry";
import { SwapiServiceProvider } from "../../context";
import TestService from "../../services/test-service";
import PeoplePage from "../pages/people-page";
import PlanetsPage from "../pages/planets-page";
import StarshipsPage from "../pages/starships-page";
import PersonPage from "../pages/person-page";
import "./app.css";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      {<span>{item[field]}</span>}
      {/*  {<span>{field}</span>} */}
    </li>
  );
};

export default class App extends Component {
  swapiService = new SwapiService();
  testService = new TestService();

  state = {
    showRandomPlanet: true,
    error: false,
    selectedItem: null,
    selectedPlanet: null,
    isLoggedIn: false,
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

  onSelectedPlanet = (id) => {
    this.setState({
      selectedPlanet: id,
    });
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    const { getPersonImage, getPerson } = this.swapiService;
    const { selectedItem, selectedPlanet } = this.state;
    const peopleItem = <PersonList onSelectedItem={this.onSelectedItem} />;
    const planetList = <PlanetList onSelectedItem={this.onSelectedPlanet} />;
    const persoDetails = <PersonDetails selectedItem={selectedItem} />;
    const planetDetails = <PlanetDetails selectedItem={selectedPlanet} />;

    if (this.state.error) {
      return <ErrorIndicator />;
    }

    return (
      <SwapiServiceProvider value={this.swapiService}>
        <div className="stardb-app">
          <Router>
            <Header />
            <Switch>
              <Route path="/" render={() => <h1>Welcome</h1>} exact />
              <Route path="/people" component={PeoplePage} exact />
              <Route path="/planets/:id?" component={PlanetsPage} />
              <Route path="/starships" component={StarshipsPage} />
              <Route path="/people/:id" component={PersonPage} />
              <Route render={() => <h1>Page not found!</h1>} />
            </Switch>
          </Router>
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

          {/*     <Row left={peopleItem} right={persoDetails} />
          <Row left={planetList} right={planetDetails} /> */}
          {/*  <PeoplePage />*/}
        </div>
      </SwapiServiceProvider>
    );
  }
}

export { Record };
