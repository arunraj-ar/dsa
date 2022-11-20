console.log("Hello Wolrd!")

const binaryTree = [1,[2,[3,[4],[5]],[6,[7],[8]]],[9,[10,[11],[12]],[13,[14],[15]]]]
console.log(binaryTree)
const dsa = (tree) => {
    let root = tree[0]
    let left = tree[1]
    let right = tree[2]
    console.log(root);
    if(left.length === 1){
        console.log(left[0])
    }else {
        dsa(left);
    }
    if(right.length === 1){
        console.log(right[0])
    } else{
        dsa(right);
    }
}

dsa(binaryTree);