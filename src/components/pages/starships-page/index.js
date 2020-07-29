import React, { Component } from "react";
import { StarshipList } from "../../sw-components/item-lists";
import { StarshipDetails } from "../../sw-components/details";
import Row from "../../row";
import { withRouter, Redirect } from "react-router-dom";

class StarshipsPage extends Component {
  onSelectedItem = (selectedStarship) => {
    this.setState({ selectedStarship });
  };

  render() {
    const { match, history } = this.props;
    const { id } = match.params;

    return (
      <Row
        left={
          <StarshipList
            onSelectedItem={(id) => {
              this.onSelectedItem(id);
              history.push(`/planets/${id}`);
            }}
          />
        }
        right={<StarshipDetails selectedItem={id} />}
      />
    );
  }
}

export default withRouter(StarshipsPage);
/*   const { history } = this.props;
    if (!this.state.isLoggedIn) {
      return <Redirect to="/" />;
    }
    console.log(history);
    return (
      <Row
        left={
          <StarshipList
            onSelectedItem={(id) => {
              history.push(`Starships/${id}`);
            }}
          />
        }
        right={<StarshipDetails selectedItem={this.state.selectedStarship} />}
      />
    );
  }
}

export default StarshipsPage;*/
