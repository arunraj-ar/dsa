const solveMaze = (maze,x,y) => {
  const n = maze.length;
  const path = [];

  const visited = new Array(n);
  for (let i = 0; i < n; ++i) {
    visited[i] = new Array(n).fill(false);
  }

  const solve = (row, col) => {
    if (row < 0 || row >= n || col < 0 || col >= n) {
      return false;
    }
    if (maze[row][col] === "#") {
      return false;
    }
    if (visited[row][col]) {
      return false;
    }
    if (maze[row][col] === "@") {
      path.push([row, col]);
      return true;
    }

    visited[row][col] = true;
    path.push([row, col]);

    if (solve(row - 1, col)) return true;
    if (solve(row + 1, col)) return true;
    if (solve(row, col - 1)) return true;
    if (solve(row, col + 1)) return true;

    path.pop();
    return false;
  };

  solve(x, y);

  return path.length > 0 ? path : [];
};

const maze = [
  ["*", "*", "#", "#", "*"],
  ["*", "*", "*", "#", "*"],
  ["#", "#", "*", "*", "*"],
  ["@", "*", "*", "#", "*"],
  ["#", "#", "#", "*", "*"],
];

console.log(solveMaze(maze,1,1));
