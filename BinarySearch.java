import java.util.LinkedList;
import java.util.Stack;



public class list
{
    public class Node
    {
        int val;
        Node next;



        Node(int val)
        {
            this.val=val;
            this.next=null;
        }

        Node(int val, Node next)
        {
            this.val = val;
            this.next=next;


        }



    }

    Node head;


    public void add(int val)
    {
        if(this.head==null)
            head = new Node(val);
        

        Node current = head;
        while(current.next!=null)
        {
            current= current.next;
        }


        curren.next=
    
    }






}

}
public class BinarySearch
{
    public static void main(String args[])
    {
        int[] arr={1,2,3,4,5,6,7,8,9};
        int length=arr.length-1;
        int key=9;
        int start=0;
        BinarySearch bs = new BinarySearch();

        int bsApplied=bs.binarySearchRec(arr, start, length, key);


        System.out.println(bsApplied);

        bs.fibanoci(3);
    }

    

    private int binarySearchRec(int[] arr, int start, int end,int key) 
    {
        
        if(start>end)
            return -1;

        int mid=(start+end)/2;

        if(arr[mid]==key)
            return mid;

        else if(arr[mid]>key)
            return binarySearchRec(arr, start, mid-1,key);
        
        else 
            return binarySearchRec(arr, mid+1, end,key);

       
        
    
    }

    public int fibanoci(int n)
    {
        if(n==0 || n==1){
            return n;
        }

       
        int a = fibanoci(n-1);
        int b = fibanoci(n-2);


        System.out.println(a+b);

        return a+b;
    }


    public static void reverseStack(Stack<?> stack)
    {
        Stack helperStack = reversedStackRec(stack);




    }



    private static Stack reversedStackRec(Stack<?> stack) {
        if(stack.isEmpty())
        {

        }
    }








}
