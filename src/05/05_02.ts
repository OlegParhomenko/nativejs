import {governmentBuildingsType, HousesType} from "../02/02";
import {createMessage} from "../03tests/03";

export const getStreetsTitlesOfGovernmentBuildings = (buildings: Array<governmentBuildingsType>) => {
    return buildings.map(el => el.address.street.title);
}

export const getStreetsTitlesOfHouses = (houses: Array<HousesType>) => {
    return houses.map(el => el.address.street.title);
}

export const getSumHousesNumber = (houses: Array<HousesType>) =>{
    return houses.map(el => el.address.number);
}

export function createMessages(houses: Array<HousesType>) {
    let callbackfn = (el: HousesType) => `Hello guys from ${el.address.street.title}`;
    let newArray = houses.map(callbackfn);
    return newArray
}