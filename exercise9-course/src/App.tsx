import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";
import {CoursePart} from "./types";

const App: React.FunctionComponent = () => {
    const courseName = "Stack relatively full by now";
    const courseParts: CoursePart[] = [
        {
            name: "Fundamentals",
            exerciseCount: 10
        },
        {
            name: "Using props to pass data",
            exerciseCount: 7,
            groupProjectCount: 3
        },
        {
            name: "Deeper type usage",
            exerciseCount: 14,
            exerciseSubmissionLink: "https://does.not.exist/ordoesit"
        },
        {
            name: "Types and stuff",
            exerciseCount: 0,
            description: "I do not even know anymore",
            typeType: "Type, I think"
        }
    ]
    return (
        <div>
            <Header courseName = {courseName} />
            <Content courseParts = {courseParts} />
            <Total courseParts = {courseParts} />
        </div>
    )
}
export default App;
