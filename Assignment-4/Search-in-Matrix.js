function searchMatrix(matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }

    let rows = matrix.length;      //len
    let cols = matrix[0].length;   //len

    // the top-right corner
    let row = 0;                   //access
    let col = cols - 1;           //access

    // Iterate  matrix
    while (row < rows && col >= 0) {
        console.log(`Checking element at row ${row}, col ${col}: ${matrix[row][col]}`);
        
        if (matrix[row][col] === target) {
            console.log(`Found target ${target} at row ${row}, col ${col}`);
            return true;
        } else if (matrix[row][col] > target) {
            console.log(`Element ${matrix[row][col]} greater than target ${target}. Move left.`);
            col--;
        } else {
            console.log(`Element ${matrix[row][col]} less than target ${target}. Move  down.`);
            row++;
        }
    }

    console.log(`target ${target} is not present in the matrix.`);
    return false;
}

const matrix = [
    [10, 20, 30, 40],
    [15, 25, 35, 45],
    [27, 29, 37, 48],
    [32, 33, 39, 50]
];
const target = 29;

console.log(searchMatrix(matrix, target)); 
