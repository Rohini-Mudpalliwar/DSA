function findCommonElements(matrix) {
    if (matrix.length === 0) return [];

    let commonMap = {};

    for (let num of matrix[0]) {
        commonMap[num] = 1;
    }

    for (let i = 1; i < matrix.length; i++) {
        let row = matrix[i];
        let rowMap = {};
        for (let num of row) {
            if (commonMap[num]) {
                rowMap[num] = (rowMap[num] || 0) + 1;
            }
        }
        for (let key in commonMap) {
            if (rowMap[key]) {
                commonMap[key]++;
            } else {
                delete commonMap[key];
            }
        }
    }

    let result = [];
    for (let key in commonMap) {
        if (commonMap[key] === matrix.length) {
            result.push(parseInt(key));
        }
    }

    return result;
}

const matrix = [
    [1, 2, 1, 4, 8],
    [3, 7, 8, 5, 1],
    [8, 7, 7, 3, 1],
    [8, 1, 2, 7, 9]
];

console.log(findCommonElements(matrix)); 
