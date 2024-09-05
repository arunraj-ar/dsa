var combinationSum = function(candidates, target) {
    const getCombination = (start = 0, target = 0, combination = [], result = []) => {
        if (target < 0) {
            return;
        } else if(target ===0){
            result.push(combination)
        }

        for(let i = start; i<candidates.length;i++) {
            getCombination(i, target-candidates[i], [...combination,candidates[i]], result)
        }
    }
    candidates = candidates.sort((a,b) => a-b)
    const result = []
    getCombination(0,target, [], result);
    return result;
};



console.log(combinationSum([2,3,6,7],7))