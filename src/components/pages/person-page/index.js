import React, { Component } from "react";

import { PersonDetails } from "../../sw-components/details";
import Row from "../../row";
import { withRouter } from "react-router-dom";

class PersonPage extends Component {
  render() {
    const { match /*location, history */ } = this.props;
    const { id } = match.params;
    return <PersonDetails selectedItem={Number(id)} />;
  }
}

export default withRouter(PersonPage);
