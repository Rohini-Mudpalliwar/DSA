function displayBoundaryElements(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    for (let i = 0; i < cols; i++) {
        console.log(matrix[0][i]);
    }

          for (let i = 1; i < rows - 1; i++) {
        console.log(matrix[i][cols - 1]);
             }

    if (rows > 1) {
        for (let i = 0; i < cols; i++) {
            console.log(matrix[rows - 1][i]);
        }
    }

    for (let i = 1; i < rows - 1; i++) {
        console.log(matrix[i][0]);
    }
}

const matrix = [
    [1, 2, 3],
     [5, 6, 7],
    [1, 2, 3]
];

displayBoundaryElements(matrix);

