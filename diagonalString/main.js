// Input: 
const STR = 'FLIPKARTISHIRING'
const ROW = 4



// F           R           R    
// L       A   T       I   I
// I   K       I   H       N 
// P           S           G  


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


console.log(diagonalTraversal(STR, ROW))
    


