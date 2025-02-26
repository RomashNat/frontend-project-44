const getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getOperation = () => {
    const operations = ['+', '-', '*'];
    return operations[getRandomNum(0, operations.length - 1)];
}

const calculateResult = (num1, num2, operation) => {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
    }
}

export { getRandomNum, getOperation, calculateResult };