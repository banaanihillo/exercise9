import React from "react";
import Course from "../types";

const Total: React.FunctionComponent<{courseParts: Course[]}> = (props) => {
    const {courseParts} = props;
    return (
        <div>
            <p>
                Total number of exercises: {" "}
                {courseParts.reduce((something, otherThing) =>
                    something + otherThing.exerciseCount, 0
                )}
            </p>
        </div>
    )
}
export default Total;
