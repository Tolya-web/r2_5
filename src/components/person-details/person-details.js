import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import ErrorButton from '../error-button/error-button';
import ErrorIndicator from "../error-indicator/error-indicator";
import "./person-details.css";


export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    personInfo: {},
    error: false
  }






  componentDidUpdate(prevProps) {
    if (prevProps.selectedItem !== this.props.selectedItem) {
      this.swapiService.getPerson(this.props.selectedItem).then(res => {
        this.setState({
          personInfo: res
        })
      }
      )
    }
  }

  componentDidCatch() {
    this.setState({
      error: true
    })
  }

  render() {

    const { name, id, eyeColor, birthYear, gender } = this.state.personInfo;

    if (this.state.error) {
      return <ErrorIndicator />
    }

    /*    console.log(personInfo); */

    return (
      <div className="person-details card">
        <img
          className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt="character"
        />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
        <ErrorButton />
      </div>
    );
  }
}
