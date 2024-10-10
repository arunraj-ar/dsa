// Input: 
// STR = FLIPKARTISHIRING
// ROW = 4

// Output: FRRLATIIIKIHNPSG

// grid[x][y]
const STR = 'FLIPKARTISHIRING'
const ROW = 4
let COL = 0;
if(ROW <3){
    COL = STR.length/ROW + STR.length%ROW
} 
// else if(ROW===3){
//     COL = STR.length/ROW + ((ROW-2)*((STR.length/ROW)-2))
// } 
else {
    COL = STR.length/ROW + ((ROW-2)*((STR.length/ROW)-3))
}

const grid = Array.from({length: ROW},() => Array.from({length: COL }).fill(' '))
let charIdx = 0
let colIdx = 0
while (charIdx<STR.length){
    for (let i = 0; i<ROW ; i++) {
        grid[i][colIdx] = STR[charIdx]?STR[charIdx]:' '
        charIdx+=1;
    }
    colIdx+=1
    if(colIdx>=grid[0].length){
        break;
    }
    for(let i = 1 ; i<ROW-1;i++ ) {
        grid[ROW-i-1][colIdx] = STR[charIdx]?STR[charIdx]:' '
        charIdx+=1
        colIdx+=1
        if(colIdx>=grid[0].length){
            break;
        }
    }
}

console.log(grid)
    


// F           R           R    
// L       A   T       I   I
// I   K       I   H       N 
// P           S           G  
