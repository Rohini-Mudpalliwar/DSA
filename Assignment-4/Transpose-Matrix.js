// QUE = Transpose the matrix

function transposeMatrix(matrix) {
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {

        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
    }
    return matrix;
  }
  


//given matrix
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log(transposeMatrix(matrix));
