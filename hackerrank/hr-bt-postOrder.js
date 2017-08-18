function Node(data, left, right) {
    var node = {};
    node.data = data;
    node.left = left;
    node.right = right;
    return node;
}


function postOrder(root, string) {
    string = string || [];
    let currentData = root.data;

    string.unshift(currentData);

    if(root.right){
        currentData = root.right;
        postOrder(currentData, string);
    }
    
    if(root.left) {
        currentData = root.left;
        postOrder(currentData, string);
    }

    string = string.join(" ");
    return string;
}

tree = Node(1, null, Node(2, null, Node(5, Node(3, null, Node(4, Node(6, null, null)), null))));

console.log(postOrder(tree));