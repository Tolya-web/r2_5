import React from "react";
import ItemList from "../item-list";
import { withData, withChildFunction } from "../../hocs";
import SwapiService from "../../services/swapi-service";

const { getAllPeople, getAllPlanets, getAllStarships } = new SwapiService();

const renderName = ({ name }) => <span>{name}</span>;
const renderNameAndGender = ({ name, gender }) => (
  <span>{`${name} | ${gender}`} </span>
);
const renderNameAndModel = ({ name, model }) => (
  <span>{`${name} | ${model}`} </span>
);
const PersonList = withData(
  withChildFunction(ItemList, renderNameAndGender),
  getAllPeople
);

const PlanetList = withData(
  withChildFunction(ItemList, renderName),
  getAllPlanets
);

const StarshipList = withData(
  withChildFunction(ItemList, renderNameAndModel),
  getAllStarships
);

export { PersonList, PlanetList, StarshipList };
