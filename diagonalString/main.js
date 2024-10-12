// Input: 
// STR = FLIPKARTISHIRING
// ROW = 4

// Output: FRRLATIIIKIHNPSG




const diagonalTraversal = (str, ROW) => {
    if(ROW === 1) return str;

    let rows = new Array(Math.min(ROW, str.length)).fill("")

    let currRow = 0;
    let goindDown = false;

    for (let char of str) {
        rows[currRow] += char;
        if(currRow===0 || currRow===ROW-1){
            goindDown = !goindDown;
        }
        currRow += goindDown ? 1 : -1;
    }

    return rows.join("")
}




// grid[x][y]
const STR = 'FLIPKARTISHIRING'
const ROW = 4
// let COL = 0;
// if(ROW <3){
//     COL = STR.length/ROW + STR.length%ROW
// } 
// // else if(ROW===3){
// //     COL = STR.length/ROW + ((ROW-2)*((STR.length/ROW)-2))
// // } 
// else {
//     COL = STR.length/ROW + ((ROW-2)*((STR.length/ROW)-3))
// }

// const grid = Array.from({length: ROW},() => Array.from({length: COL }).fill(' '))
// let charIdx = 0
// let colIdx = 0
// while (charIdx<STR.length){
//     for (let i = 0; i<ROW ; i++) {
//         grid[i][colIdx] = STR[charIdx]?STR[charIdx]:' '
//         charIdx+=1;
//     }
//     colIdx+=1
//     if(colIdx>=grid[0].length){
//         break;
//     }
//     for(let i = 1 ; i<ROW-1;i++ ) {
//         grid[ROW-i-1][colIdx] = STR[charIdx]?STR[charIdx]:' '
//         charIdx+=1
//         colIdx+=1
//         if(colIdx>=grid[0].length){
//             break;
//         }
//     }
// }

// let res = ''

// for(let row of grid) {
//     for (let item of row){
//         if(item !== ' '){
//             res+=item
//         }
//     }
// }

// console.log(grid, res)

console.log(diagonalTraversal(STR, ROW))
    


// F           R           R    
// L       A   T       I   I
// I   K       I   H       N 
// P           S           G  
