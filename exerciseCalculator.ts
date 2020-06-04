interface TrainingSummary {
    totalDays: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    feedback: string,
    targetHours: number,
    averageHours: number
}

export const parseTargetHours = (targetHourInput: number): number => {
    if (!targetHourInput) {
        throw new Error("The parameter for target hours is missing.")
    }
    if (!isNaN(Number(targetHourInput))) {
        return Number(targetHourInput);
    } else {
        throw new Error("The target hour parameter should be a number.");
    }
}

export const parseExerciseHours = (exerciseHourInput: Array<string>) : Array<number> => {
    if (!exerciseHourInput) {
        throw new Error("The exercise hour parameters are missing.")
    }
    const exerciseHours = exerciseHourInput.map(hours => {
        if (!isNaN(Number(hours))) {
            return Number(hours);
        } else {
            throw new Error("The arguments for exercise hours should be numbers.");
        }
    })
    return exerciseHours;
}

const calculateExercises = (
    targetHours: number,
    exerciseHours: Array<number>
): TrainingSummary => {
    const reducer = (summand: number, sum: number): number => (summand + sum);
    const averageHours: number = (exerciseHours.reduce(reducer) / exerciseHours.length);
    const success: boolean = (averageHours >= targetHours) ? true : false;
    const getRating = (averageHours: number): number => {
        if ((averageHours - targetHours) >= 0.5) {
            return 3;
        } else if ((targetHours > averageHours)) {
            return 1;
        } else {
            return 2;
        }
    }
    const rating = getRating(averageHours);

    const getFeedback = (rating: number): string => {
        switch (rating) {
            case 1:
                return "Consider cycling instead of driving a car, for instance.";
            case 2:
                return "Looking good, keep it up!";
            case 3:
                return "Great work! Remember to take a day off every now and then.";
            default:
                return "what are you doing here";
        }
    }

    return {
        totalDays: exerciseHours.length,
        trainingDays: exerciseHours.filter(hours => hours !== 0).length,
        success: success,
        rating: rating,
        feedback: getFeedback(rating),
        targetHours: targetHours,
        averageHours: averageHours
    }
}
/*
try {
    const targetHourInput = parseTargetHours(process.argv[2]);
    const exerciseHourInput = parseExerciseHours(process.argv.slice(3));
    console.log(calculateExercises(targetHourInput, exerciseHourInput));
} catch (error) {
    console.log(error);
}
*/
export default calculateExercises
