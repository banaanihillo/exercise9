import {DiaryEntry} from "../types";
import toNewDiaryEntry from "../utils";

const diaryData = [
    {
        "id": 1,
        "date": "2017-01-01",
        "weather": "rainy",
        "visibility": "poor",
        "comment": "Pretty scary flight, I'm glad I'm alive"
    },
    {
        "id": 2,
        "date": "2017-04-01",
        "weather": "sunny",
        "visibility": "good",
        "comment": "Everything went better than expected"
    },
    {
        "id": 3,
        "date": "2017-04-15",
        "weather": "windy",
        "visibility": "good",
        "comment": "I'm getting pretty confident although I hit a flock of birds"
    },
    {
        "id": 4,
        "date": "2017-05-11",
        "weather": "cloudy",
        "visibility": "good",
        "comment": "I almost failed the landing but I survived"
    }
]

const diaryEntries: DiaryEntry[] = diaryData.map(object => {
    const diaryObject = toNewDiaryEntry(object) as DiaryEntry
    diaryObject.id = object.id
    return diaryObject
})

export default diaryEntries;
