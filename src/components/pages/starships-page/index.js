import React, { Component } from "react";
import { StarshipList } from "../../sw-components/item-lists";
import { StarshipDetails } from "../../sw-components/details";
import Row from "../../row";

class StarshipsPage extends Component {
  state = {
    selectedStarship: null,
  };

  onSelectedItem = (selectedStarship) => {
    this.setState({ selectedStarship });
  };

  render() {
    return (
      <Row
        left={<StarshipList onSelectedItem={this.onSelectedItem} />}
        right={<StarshipDetails selectedItem={this.state.selectedStarship} />}
      />
    );
  }
}

export default StarshipsPage;
