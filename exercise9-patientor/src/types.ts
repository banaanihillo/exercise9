export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy";

export type Visibility = "great" | "good" | "ok" | "poor";

export interface DiaryEntry {
    id: number;
    date: string;
    weather: Weather;
    visibility: Visibility;
    comment?: string;
};

export type NonSensitiveDiaryEntry = Omit<DiaryEntry, "comment">;

export interface Diagnosis {
    code: string;
    name: string;
    latin?: string;
};

export type Gender = "other" | "female" | "male"

export interface Patient {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: Gender;
    occupation: string;
}
