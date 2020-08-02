import React, { Component } from "react";
import { PersonList } from "../../sw-components/item-lists";
import { PersonDetails } from "../../sw-components/details";
import Row from "../../row";

class PeoplePage extends Component {
  state = {
    selectedItem: null,
  };

  onSelectedItem = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;
    return (
      <Row
        left={<PersonList onSelectedItem={this.onSelectedItem} />}
        right={<PersonDetails selectedItem={this.state.selectedItem} />}
      />
    );
  }
}

export default PeoplePage;
