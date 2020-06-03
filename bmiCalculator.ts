interface CalculateBMI {
    height: number;
    mass: number;
}

const parseBMIArguments = (args: Array<string>): CalculateBMI => {
    if (args.length < 4 || args.length > 4) {
        throw new Error("Calculation of BMI requires exactly two arguments.");
    }

    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            height: Number(args[2]),
            mass: Number(args[3])
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

try {
    const {height, mass} = parseBMIArguments(process.argv);
    console.log(calculateBmi(height, mass));
} catch (error) {
    console.log(error)
}
