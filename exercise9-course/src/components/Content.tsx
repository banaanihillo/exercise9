import React from "react";
import Course from "../types";

const Content: React.FunctionComponent<{courseParts: Course[]}> = (props) => {
    const {courseParts} = props;
    return (
        <div>
            <h2> Course contents </h2>
            <p>
                {courseParts.map(coursePart =>
                    <li key = {coursePart.name}>
                        {coursePart.name}
                    </li>
                )}
            </p>
        </div>
    )
}
export default Content;
