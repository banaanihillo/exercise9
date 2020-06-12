interface CoursePartTemplate {
    name: string;
    exerciseCount: number;
}

interface CoursePartZero extends CoursePartTemplate {
    name: "Types and stuff";
    description: string;
    typeType: string;
}

interface CoursePartOne extends CoursePartTemplate {
    name: "Fundamentals";
}

interface CoursePartTwo extends CoursePartTemplate {
    name: "Using props to pass data";
    groupProjectCount: number;
}

interface CoursePartThree extends CoursePartTemplate {
    name: "Deeper type usage";
    exerciseSubmissionLink: string;
}

export type CoursePart = CoursePartZero | CoursePartOne | CoursePartTwo | CoursePartThree

type Course = {
    name: string,
    exerciseCount: number
}
export default Course;
