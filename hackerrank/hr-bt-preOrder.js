function Node(data, left, right) {
    var node = {};
    node.data = data;
    node.left = left;
    node.right = right;
    return node;
}


function preOrder(root) {
    let currentData = root.data;
    process.stdout.write(currentData + " ");

    if(root.right){
        currentData = root.right;
        preOrder(currentData);
    }
    
    if(root.left) {
        currentData = root.left;
        preOrder(currentData);
    }
    
}

tree = Node(1, null, Node(2, null, Node(5, Node(3, null, Node(4, Node(6, null, null)), null))));
preOrder(tree);