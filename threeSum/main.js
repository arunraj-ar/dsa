
const twoSum = function(target, arr) {
    const seen = new Set();
    const result = new Map();

    for(let num of arr) {
        let comp = -(target + num);
        if((target < 0 && num < 0) ||(target > 0 && num > 0)) {
            comp = -(target+num)
        }
        if(seen.has(comp)){
            const pair = [Math.min(num,comp), Math.max(num,comp)]
            result.set(pair.toString(),pair);
        }
        seen.add(num);
    }
    return [...result.values()]
};
const threeSum = function(arr) {
    let result = new Map()
    for(let i=0; i< arr.length; i++) {
        const pairs = twoSum(arr[i], arr.slice(i+1))
        pairs.forEach(pair => {
            const triplets = [arr[i], ...pair].sort((a,b) => a-b)
            result.set(triplets.toString(), triplets)
        })
    }
    return [...result.values()]
};

const nums = [-1,0,1,2,-1,-4, 2];
console.log(threeSum(nums))