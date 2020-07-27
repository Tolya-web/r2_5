import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import { withData } from "../../hocs";

import "./item-list.css";

export default class ItemList extends Component {
  renderItems(arr) {
    console.log(this.props.children);
    return arr.map((elem) => {
      return (
        <li
          className="list-group-item"
          key={elem.id}
          onClick={() => this.props.onSelectedItem(elem.id)}
        >
          {this.props.children(elem)}
        </li>
      );
    });
  }

  render() {
    const { data } = this.props;

    return <ul className="item-list list-group">{this.renderItems(data)}</ul>;
  }
}

/*const { getAllPeople, getAllPlanets } = new SwapiService();
export default withData(ItemList, getAllPeople, getAllPlanets);*/
