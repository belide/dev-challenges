void postOrder(Node root) {
    
  if(root.left != null) {
        Node left = root.left;
        postOrder(left);
    }
  
  if(root.right != null){
        Node right = root.right;
        postOrder(right);
    }
   
    int currentData = root.data; 
    System.out.print(currentData + " ");
}