import React, { Component } from "react";

import PropTypes from "prop-types";

import SwapiService from "../../services/swapi-service";
import ErrorButton from "../error-button/error-button";
//import ErrorIndicator from "../error-indicator/error-indicator";
import "./item-details.css";

export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: {},
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedItem !== this.props.selectedItem) {
      this.updateItem();
    }
  }

  updateItem() {
    const { selectedItem, getData, getImageUrl } = this.props;

    if (!selectedItem) {
      return;
    }

    getData(selectedItem).then((item) => {
      this.setState({
        item,
        image: getImageUrl(item),
      });
    });
  }

  render() {
    const { item } = this.state;
    if (!item) {
      return <span>Select a personfrom a list</span>;
    }
    const { name /*, id, eyeColor, birthYear, gender*/ } = item;
    const { getImageUrl, children } = this.props;

    return (
      <div className="person-details card">
        <img className="person-image" src={getImageUrl(item)} alt="character" />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(children, (child) => {
              return React.cloneElement(child, { item });
            })}
          </ul>
        </div>
        <ErrorButton />
      </div>
    );
  }
}
