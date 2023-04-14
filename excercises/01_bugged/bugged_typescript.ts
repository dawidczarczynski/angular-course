interface InputData {
    firstCondition: boolean;
    anotherCondition: boolean;
}

interface OutputData extends InputData {
    processed: boolean;
    reason?: string;
}

(() => {
    function myVeryComplexLogic(inputData: InputData): OutputData {
        if (inputData.firstCondition && inputData.anotherCondition) {
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
        firstCondition: true,
        otherCondition: 1234
    };
    const results = myVeryComplexLogic(inputs);
    
    console.log(results.nonExistingProperty);
})();
