import * as fs from "node:fs";
export type StreetType = {
    title: string;
}


export type AdressType = {
    number?: number;
    street: StreetType;
}

export type governmentBuildingsType = {
    type: 'HOSPITAL' | 'FIRE-STATION';
    budget: number;
    staffCount: number;
    address: AdressType
}

export type HousesType = {
    id?: number;
    buildedAt: number,
    repaired: boolean,
    address: AdressType,
}

export type cityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<governmentBuildingsType>
    citizensNumber: number
}