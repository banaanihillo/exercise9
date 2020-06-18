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

export type SecurePatient = Omit<Patient, "ssn" | "entries">;

export type NewDiaryEntry = Omit<DiaryEntry, "id">;

export type Entry = (HealthCheckEntry | HospitalEntry | OccupationalHealthcareEntry)

export interface EntryWithPatient {
    patient: Patient;
    entry: Entry;
}

interface EntryTemplate {
    id: string;
    date: string;
    type: ("HealthCheck" | "Hospital" | "OccupationalHealthcare");
    specialist: string;
    description: string;
    diagnosisCodes?: Array<Diagnosis["code"]>;
}

export enum HealthCheckRating {
    "Healthy" = 0,
    "LowRisk" = 1,
    "HighRisk" = 2,
    "CriticalRisk" = 3
}

interface HealthCheckEntry extends EntryTemplate {
    type: "HealthCheck";
    healthCheckRating: HealthCheckRating;
}

interface HospitalEntry extends EntryTemplate {
    type: "Hospital";
    discharge: Discharge;
}

interface Discharge {
    date: string;
    criteria: string;
}

interface OccupationalHealthcareEntry extends EntryTemplate {
    type: "OccupationalHealthcare";
    employerName: string;
    sickLeave?: SickLeave;
}

interface SickLeave {
    startDate: string;
    endDate: string;
}
