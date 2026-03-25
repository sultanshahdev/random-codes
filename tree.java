class BinaryTree
{
    class Node
    {
	int val;
	Node left,right;

	public Node(int val)
	{
	    this.val=val;
	    left=right=null;
	    
	}


	Node root;


	public tree()
	{
	    this.root=null;
	}

	public void add(int val)
	{
	    Node newNode = new Node(val);
	    Node traverse=root;
	    Node trailing=null;
	    if (root=null)
		root = newNode;
	    
	    else
	    {
		while(traverse!=null)
		{
		    trailing=traverse;
		    if(val>node.val)
			{
			    traverse=traverse.right;
			    
			}
		    else
			{
			    traverse=travese.left;
			}
		   
		}
		if(val>trailing.val)
		{
		    trailing.right=newNode;
		}
		trailing.left=newNode;
		
            }
	    
		
	  
	    
