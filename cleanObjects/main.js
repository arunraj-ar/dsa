// Input: obj = [null, 0, false, 1, true]
// Output: [1, true]

// TC 2- 
// Input: obj = {"a": null, "b": [false, 1]}
// Output: {"b": [1]}



// Input: obj = [null, 0, [1, null, ,5], true]
// Output = [[1,5],true]


// Input: obj = {“a”:null, “b”: {“c”: null, “d”:{“x”: 5, “y”: 0}}}
// Output: {“b”:{ “d”: {“x”:5}}}




const removeFalsy = (inp) => {
    if(!inp) return;

    let resultArr=[]
    let resultObj = {}
    if(typeof inp === 'object'){
        if(Array.isArray(inp)){
            for(let item of inp) {
                if(item) {
                    if(Array.isArray(item)){
                        resultArr.push(removeFalsy(item))
                    } else {
                        resultArr.push(item)
                    }
                }
            }
        } else {
            for(let item of Object.keys(inp)) {
                if(inp[item]) {
                    resultObj[item]= removeFalsy(inp[item])
                }
            }
        }
    }

    return resultArr.length>0 ? resultArr : (Object.keys(resultObj).length>0 ? resultObj : inp);
}

console.log(removeFalsy([null, 0, false, 1, true]))
console.log(removeFalsy([null, 0, [1, null, ,5], true]))
console.log(removeFalsy({a:null, b: 3, c: {a:[1,0,2,,]}}))