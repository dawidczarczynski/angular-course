interface InputData {
    firstCondition: boolean;
    anotherCondition: boolean;
}

interface OutputData {
    inputData: InputData;
    processed: boolean;
    reason?: string;
}

function myVeryComplexLogic(inputData: InputData): OutputData {
    if (inputData.firstCondition && inputData.anotherCondition) {
        return {
            inputData,
            processed: true
        };
    }

    return {
        inputData,
        processed: false,
        reason: 'Dataset did not meet requirements'
    };
}

const inputs = {
    firstCondition: true,
    anotherCondition: true
};
const results = myVeryComplexLogic(inputs);

console.log(results);