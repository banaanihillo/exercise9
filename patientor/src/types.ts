export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other"
}

export interface Patient {
  id: string;
  name: string;
  occupation: string;
  gender: Gender;
  ssn?: string;
  dateOfBirth?: string;
  entries?: Entry[];
}

export interface PatientProps {
    id: string
}

export type Entry = (HealthCheckEntry | HospitalEntry | OccupationalHealthcareEntry)

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
