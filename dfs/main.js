console.log("Hello Wolrd!")

const binaryTree = [1,[2,[3,[4],[5]],[6,[7],[8]]],[9,[10,[11],[12]],[13,[14],[15]]]]
console.log(binaryTree)
const dfs = (tree) => {
    let root = tree[0]
    let left = tree[1]
    let right = tree[2]
    if(left.length === 1){
        console.log(left[0])
    }else {
        dfs(left);
    }
    if(right.length === 1){
        console.log(right[0])
    } else{
        dfs(right);
    }
    console.log(root);
}

dfs(binaryTree);

const isPowerOfTwo = (num) => {
    if(num===0) return false;
    return parseInt( Math.ceil( Math.log(num) / Math.log(2) ) ) === parseInt( Math.floor( Math.log(num) / Math.log(2) ) );
}

const bfs = (tree) => {
    let queue = [];
    let currentNode = tree;
    let res = [];
    let level = 1;
    let resStr = "";
    queue.push(tree);
    while (queue.length>0){
        if(res.length === 2**level -1) {
            resStr += "\n"
            level++
        }
        currentNode = queue.shift();
        res.push(currentNode[0])
        resStr += currentNode[0] + " "//.repeat(2*level)
        if(currentNode[1]){
            queue.push(currentNode[1])
        }
        if(currentNode[2]){
            queue.push(currentNode[2])
        }
    }
    console.log(resStr)
}

bfs(binaryTree);