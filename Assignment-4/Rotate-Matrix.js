// QUE = Rotate a Matrix by 90 degrees

function rotateMatrix(matrix) {
    // TranspOse matrox
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {

        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
    }
  


    //reverse
    for (let i = 0; i < n; i++) {
      matrix[i].reverse();
    }
  
    return matrix;
  }
  


  //given matrix
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log(rotateMatrix(matrix));
