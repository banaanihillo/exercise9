//eslint-disable @typescript-eslint/no-explicit-any
import {NewDiaryEntry, Weather, Visibility} from "./types";

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

const toNewDiaryEntry = (diaryInput: any): NewDiaryEntry => {
    return {
        date: parseDate(diaryInput.date),
        comment: parseComment(diaryInput.comment),
        weather: parseWeather(diaryInput.weather),
        visibility: parseVisibility(diaryInput.visibility)
    };
};

export default toNewDiaryEntry;
