import React, { Component } from "react";

import SwapiService from '../../services/swapi-service';

import "./item-list.css";


export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    items: []
  }

  componentDidMount() {
    this.swapiService.getAllPeople().then(data => {
      this.setState({
        items: data
      })
      console.log(this.state);
    })
  }

  render() {
    const { items } = this.state;
    const { onSelectedItem } = this.props;

    return (
      <ul className="item-list list-group">
        {/* <li className="list-group-item">Luke Skywalker</li>
        <li className="list-group-item">Darth Vader</li>
        <li className="list-group-item">R2-D2</li> */}
        {
          items.map((elem) => {
            return <li className="list-group-item" key={elem.id}
              onClick={() => onSelectedItem(elem.id)}>{elem.name}</li>
          })
        }
      </ul>
    );
  }
}
