import React from "react";
import {CoursePart} from "../types";
import Part from "./Part";

const Content: React.FunctionComponent<{courseParts: CoursePart[]}> = (props) => {
    const {courseParts} = props;
    return (
        <div>
            <h2> Course contents </h2>

                {courseParts.map(coursePart =>
                        <Part key = {coursePart.name} coursePart = {coursePart} />
                )}
                
        </div>
    )
}
export default Content;
