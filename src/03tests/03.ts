import {student, StudentType} from "../02/02_02";
import {cityType, governmentBuildingsType, HousesType} from "../02/02";

export const addSkill = (student: StudentType, skill: string) =>{
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType){
    s.isActive = true;
}

export const doesStudenLiveIn= (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName
}

export function changeBudget(building: governmentBuildingsType, budget: number){
    building.budget += budget
}

export const repairHouse = (city: HousesType) => {
    city.repaired = true
}

export function toFireStaff(goverment: governmentBuildingsType, staff: number){
    goverment.staffCount += staff
}

export const toHireStaff = (goverment: governmentBuildingsType, staff: number) => {
    goverment.staffCount -= staff
}

export function createMessage(city: cityType) {
    return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber}`
}