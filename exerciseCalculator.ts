interface TrainingSummary {
    totalDays: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    feedback: string,
    targetHours: number,
    averageHours: number
}

const calculateExercises = (
    exerciseHours: Array<number>,
    targetHours: number
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

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
