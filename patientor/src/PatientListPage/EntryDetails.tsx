import React from "react";
import {Entry} from "../types";

const EntryDetails: React.FunctionComponent<{entry: Entry}> = (props) => {
    const {entry} = props;

    const assertNever = (never: never): never => {
        throw new Error(`You should never be here: ${JSON.stringify(never)}`)
    }

    switch (entry.type) {
        case "Hospital":
            return <div>
                {!entry.discharge
                    ? null
                    : <div>
                        <p> {entry.discharge.criteria} </p>
                        <p> {entry.discharge.date} </p>
                    </div>
                }
                <br />
            </div>
        case "OccupationalHealthcare":
            return <div>
                <p> Employer: {entry.employerName} </p>
                {!entry.sickLeave
                    ? null
                    : <div>
                        <p> Start of sick leave: {entry.sickLeave.startDate} </p>
                        <p> End of sick leave: {entry.sickLeave.endDate} </p>
                    </div>
                }
                <br />
            </div>
        case "HealthCheck":
            return <div>
                <p> Health rating: {entry.healthCheckRating} </p>
                <br />
            </div>
        default:
            return assertNever(entry)
    }
}

export default EntryDetails;
