interface CalculateBMI {
    height: number;
    mass: number;
}

export const parseBMIArguments = (height: number, mass: number): CalculateBMI => {
    if (!isNaN(Number(height)) && !isNaN(Number(mass))) {
        return {
            height: Number(height),
            mass: Number(mass)
        }
    } else {
        throw new Error("The arguments should be numbers: height in cm, mass in kg.");
    }
}

const calculateBmi = (
    height: number,
    mass: number
) => {
    const bodyMassIndex = (mass / ((height / 100) ** 2));
    if (bodyMassIndex < 18.5) {
        return "Your body mass index is underweight, which may not be healthy.";
    } else if (bodyMassIndex < 25) {
        return "Normal (healthy weight)";
    } else if (bodyMassIndex < 30) {
        return "Your body mass index is overweight, which may not be healthy.";
    } else {
        return "You really should consider eating less, and exercising more often.";
    }
}

//console.log(calculateBmi(180, 74));
/*
try {
    const {height, mass} = parseBMIArguments(
        Number(process.argv[2]),
        Number(process.argv[3])
    );
    console.log(calculateBmi(height, mass));
} catch (error) {
    console.log(error)
}
*/
export default calculateBmi
