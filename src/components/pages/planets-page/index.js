import React, { Component } from "react";
import { PlanetList } from "../../sw-components/item-lists";
import { PlanetDetails } from "../../sw-components/details";
import Row from "../../row";
import { withRouter } from "react-router-dom";

class PlanetsPage extends Component {
  onSelectedItem = (selectedPlanet) => {
    this.setState({ selectedPlanet });
  };

  render() {
    const { match, history } = this.props;
    const { id } = match.params;

    return (
      <Row
        left={
          <PlanetList
            onSelectedItem={(id) => {
              this.onSelectedItem(id);
              history.push(`/planets/${id}`);
            }}
          />
        }
        right={<PlanetDetails selectedItem={id} />}
      />
    );
  }
}

export default withRouter(PlanetsPage);
