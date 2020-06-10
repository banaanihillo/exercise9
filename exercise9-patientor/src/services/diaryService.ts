import diaries from "../data/diaries";
import {NonSensitiveDiaryEntry, DiaryEntry, NewDiaryEntry} from "../types";

const getEntries = (): DiaryEntry[] => {
    return diaries;
};

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
    return diaries.map(({id, date, weather, visibility}) => ({
        id,
        date,
        weather,
        visibility
    }));
}

const addEntry = (newDiary: NewDiaryEntry): DiaryEntry => {
    const newDiaryEntry = {
        ...newDiary,
        id: Math.ceil(Math.random() * 100000)
    };

    const updatedDiaries = diaries.concat(newDiaryEntry);
    console.log(updatedDiaries);
    return newDiaryEntry;
}

const findById = (id: number): DiaryEntry | undefined => {
    const diaryEntry = diaries.find(diary => diary.id === id);
    return diaryEntry;
}

export default {
    getEntries,
    addEntry,
    getNonSensitiveEntries,
    findById
};
