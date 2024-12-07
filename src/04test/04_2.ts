import {cityType, governmentBuildingsType} from "../02/02";

export function demolishHousesOnTheStreet(city: cityType, happyStreet: string) {
    city.houses = city.houses.filter(h => h.address.street.title !== happyStreet)
}

export const getBuildingsWithStaffCountGreaterThen = (governmentBuildings: Array<governmentBuildingsType>, number: number) => {
    return governmentBuildings.filter(gov => gov.staffCount > number)
}