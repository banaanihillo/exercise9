type Operation = "Multiply" | "Add" | "Divide" | "Subtract";

const calculator = (
    operand1: number,
    operand2: number,
    operation: Operation
): number => {
    switch (operation) {
        case "Multiply":
            return (operand1 * operand2);
        case "Add":
            return (operand1 + operand2);
        case "Divide":
            if (operand2 === 0) {
                throw new Error("Division by zero :(");
            } else {
                return (operand1 / operand2);
            }
        case "Subtract":
            return (operand1 - operand2);
        default:
            throw new Error("Valid operation types: Multiply, Add, Divide and Subtract.");
    }
}

console.log(process.argv)

try {
    console.log(calculator(5, 0, "Divide"));
} catch (exception) {
    console.log(`Operation failed: ${exception.message}`);
}

export default calculator
