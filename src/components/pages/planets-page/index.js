import React, { Component } from "react";
import { PlanetList } from "../../sw-components/item-lists";
import { PlanetDetails } from "../../sw-components/details";
import Row from "../../row";
import { withRouter } from "react-router-dom";

class PlanetsPage extends Component {
  state = {
    selectedPlanet: null,
  };

  onSelectedItem = (selectedPlanet) => {
    this.setState({ selectedPlanet });
  };

  render() {
    return (
      <Row
        left={<PlanetList onSelectedItem={this.onSelectedItem} />}
        right={<PlanetDetails selectedItem={this.state.selectedPlanet} />}
      />
    );
  }
}

export default withRouter(PlanetsPage);
