import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

const App: React.FunctionComponent = () => {
    const courseName = "Stack relatively full by now";
    const courseParts = [
        {
            name: "Fundamentals",
            exerciseCount: 10
        },
        {
            name: "Using props to pass data",
            exerciseCount: 7
        },
        {
            name: "Deeper type usage",
            exerciseCount: 14
        },
        {
            name: "Addition of new courses",
            exerciseCount: 1
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
