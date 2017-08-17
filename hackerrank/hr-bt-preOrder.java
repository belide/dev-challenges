void preOrder(Node root) {
    
    int currentData = root.data; 
    System.out.print(currentData + " ");

    if(root.left != null) {
        Node left = root.left;
        preOrder(left);
    }

    if(root.right != null){
        Node right = root.right;
        preOrder(right);
    }
}