interface MultiplyValues {
    factor1: number;
    factor2: number;
}

const parseArguments = (args: Array<string>): MultiplyValues => {
    if (args.length < 4) {
        throw new Error("Multiplication requires at least two operands");
    }
    if (args.length > 4) {
        throw new Error("This program does not support more than two parameters");
    }

    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            factor1: Number(args[2]),
            factor2: Number(args[3])
        }
    } else {
        throw new Error("The parameters must be numbers")
    }
}


const multiplicator = (
    factor1: number,
    factor2: number,
    result: string
) => {
    console.log(result, (factor1 * factor2));
}

try {
    const {factor1, factor2} = parseArguments(process.argv);
    multiplicator(factor1, factor2, `${factor1} multiplied by ${factor2} is: `);
} catch (exception) {
    console.log(`There was a problem with the arguments: ${exception.message}`)
}
