import React from "react";
import {CoursePart} from "../types";

const Part: React.FunctionComponent<{coursePart: CoursePart}> = (props) => {
    const {coursePart} = props;

    const exhaustiveTypeChecker = (coursePart: CoursePart) => {
        switch (coursePart.name) {
            case "Fundamentals":
                return
            case "Using props to pass data":
                return <li>
                    Group project count: {coursePart.groupProjectCount}
                </li>
            case "Deeper type usage":
                return <li>
                    Submission link: {coursePart.exerciseSubmissionLink}
                </li>
            case "Types and stuff":
                return <span>
                    <li>
                        Description: {coursePart.description}
                    </li>
                    <li>
                        Something: {coursePart.typeType}
                    </li>
                </span>
            default:
                return <li>
                    Includes a part of the course that may or may not yet be defined
                </li>
        }
    }
    
    return (
        <div>
            <ul key = {coursePart.name}>
                <h3>
                    {coursePart.name}
                </h3>
                <li>
                    Exercise count: {coursePart.exerciseCount}
                </li>
                {exhaustiveTypeChecker(coursePart)}
            </ul>
        </div>
    )
}

export default Part;
