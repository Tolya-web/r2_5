import React from "react";
import ItemDetails from "../item-details";
import { withData, withService } from "../../hocs";
import SwapiService from "../../services/swapi-service";
import { Record } from "../app/app";
import { SwapiServiceConsumer } from "../../context";

const {
  getPlanet,
  getStarship,
  getPlanetImage,
  getStarshipImage,
} = new SwapiService();

const personDetails = ({ selectedItem, swapiService }) => (
  <SwapiServiceConsumer>
    {({ getPerson, getPersonImage }) => {
      return (
        <ItemDetails
          selectedItem={selectedItem}
          getData={getPerson}
          getImageUrl={getPersonImage}
        >
          <Record field="gender" label="Gender"></Record>
          <Record field="eyeColor" label="Eye color"></Record>
        </ItemDetails>
      );
    }}
  </SwapiServiceConsumer>
);

const PersonDetails = withService(personDetails);

const PlanetDetails = ({ selectedItem }) => (
  <ItemDetails
    selectedItem={selectedItem}
    getData={getPlanet}
    getImageUrl={getPlanetImage}
  >
    <Record field="name" label="Name"></Record>
  </ItemDetails>
);

const StarshipDetails = ({ selectedItem }) => (
  <ItemDetails
    selectedItem={selectedItem}
    getData={getStarship}
    getImageUrl={getStarshipImage}
  >
    <Record field="model" label="Model"></Record>
  </ItemDetails>
);

export { PersonDetails, PlanetDetails, StarshipDetails };
