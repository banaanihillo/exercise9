//eslint-disable @typescript-eslint/no-explicit-any
import {NewDiaryEntry, Weather, Visibility, Gender, Patient} from "./types";

const parseComment = (comment: any): string => {
    if (!comment || !isString(comment)) {
        throw new Error(`The parameter "${comment}" is not a valid comment.`);
    }
    return comment;
}

const isString = (text: any): text is string => {
    return (typeof text === "string" || text instanceof String);
}

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
}

const parseDate = (date: any): string => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error(`The parameter "${date}" is not a valid representation of date.`);
    }
    return date;
}

const parseWeather = (weather: any): Weather => {
    if (!weather || !isWeather(weather)) {
        throw new Error(`The parameter "${weather}" is not a valid weather input.`);
    }
    return weather;
}

const isWeather = (weatherParameter: any): weatherParameter is Weather => {
    return Object.values(Weather).includes(weatherParameter);
}

const isVisibility = (visibilityParameter: any): visibilityParameter is Visibility => {
    return Object.values(Visibility).includes(visibilityParameter);
}

const parseVisibility = (visibility: any): Visibility => {
    if (!visibility || !isVisibility(visibility)) {
        throw new Error(`The parameter "${visibility}" is invalid for Visibility`);
    }
    return visibility;
}

const parseString = (stringInput: any): string => {
    if (!stringInput || !isString(stringInput)) {
        throw new Error(`The parameter "${stringInput}" should be a string.`)
    }
    return stringInput;
}

const isGender = (genderParameter: any): genderParameter is Gender => {
    return Object.values(Gender).includes(genderParameter);
}

const parseGender = (gender: any): Gender => {
    if (!gender || !isGender(gender)) {
        throw new Error(`The parameter "${gender}" does not fit the gender criteria.`)
    }
    return gender;
}

export const parsePatientInput = (patientInput: any): Patient => {
    return {
        id: patientInput.id,
        name: parseString(patientInput.name),
        dateOfBirth: parseDate(patientInput.dateOfBirth),
        gender: parseGender(patientInput.gender),
        occupation: parseString(patientInput.occupation),
        ssn: parseString(patientInput.ssn),
        entries: []
    }
}

const toNewDiaryEntry = (diaryInput: any): NewDiaryEntry => {
    return {
        date: parseDate(diaryInput.date),
        comment: parseComment(diaryInput.comment),
        weather: parseWeather(diaryInput.weather),
        visibility: parseVisibility(diaryInput.visibility)
    };
};

export default toNewDiaryEntry;
