export enum Weather {
    Sunny = "sunny",
    Rainy = "rainy",
    Cloudy = "cloudy",
    Windy = "windy",
    Stormy = "stormy"
};

export enum Visibility {
    Great = "great",
    Good = "good",
    OK = "ok",
    Poor = "poor"
};

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

export enum Gender {
    Other = "other",
    Female = "female",
    Male = "male"
}

export interface Patient {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: Gender;
    occupation: string;
    entries: Entry[];
}

export type SecurePatient = Omit<Patient, "ssn">;

export type NewDiaryEntry = Omit<DiaryEntry, "id">;

export interface Entry {
    
}
