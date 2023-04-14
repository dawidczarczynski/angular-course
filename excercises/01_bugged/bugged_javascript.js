function myVeryComplexLogic(inputData) {
    if (inputData.firstCondition & inputData.anotherCondition) {
        return {
            ...inputData,
            processed: true
        };
    }

    return {
        ...inputData,
        processed: false,
        reason: 'Dataset did not meet requirements'
    };
}

const inputs = {
    firstCondition: false,
    otherCondition: 1234
};

const results = myVeryComplexLogic(inputs);
console.log(results.nonExistingProperty);