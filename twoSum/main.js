const twoSum = (arr) => {
    const map = new Set();
    const result = new Map();
    for(let num of arr) {
        const comp = 0 - num;
        if(map.has(comp)) {
            const pair = [Math.min(comp,num), Math.max(num,comp)]
            result.set(pair.toString(),pair);
        }
        map.add(num);
    }

    return [...result.values()]
}

const numbers = [3, -3, 1, 2, -2, -1, 3, -3, -1, 1, 0, 0, 2, -2, -2];
console.log(twoSum(numbers));//