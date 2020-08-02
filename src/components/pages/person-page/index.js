import React, { Component } from "react";

import { PersonDetails } from "../../sw-components/details";
import Row from "../../row";

class PersonPage extends Component {
  state = {
    selectedItem: 4,
  };

  onSelectedItem = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;
    return (
      <Row right={<PersonDetails selectedItem={this.state.selectedItem} />} />
    );
  }
}

export default PersonPage;
