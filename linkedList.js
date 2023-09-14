class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value){

        // If the list is empty, create new node and refer the head and tail to it
        if(!this.tail){
            const newNode = new Node(value);

            this.head = newNode;
            this.tail = newNode;
            
            this.length ++;

        } else{

            // IF the list is not empty, create new node. Set new node as last node
            const storedNode = this.tail;
            const newNode = new Node(value);

            storedNode.next = newNode;
            newNode.prev = storedNode;
            newNode.next = null;

            this.tail = newNode;
            this.length ++;
        }
    }

    prepend(value){
    }

    size(){
        return this.length;
    }

    head(){
        return this.head;
    }

    tail(){
        return this.tail;
    }

    at(index){
    }

    pop(){

        // If list is empty, do nothing
        if(this.tail == null) return;
        
        // If list has one node, empty the head and tail
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return;
        }
      
        // If there are more than one nodes in the list, remove the 'next' reference 
        // and set the previous node as 'tail
        let newTail = this.tail.prev
        newTail.next = null;
        this.tail = newTail;
        this.length--;
    }

    contains(value){
    }

    find(value){
    }

    toString(){
        let current = this.head;

        // If there is a 'head' node, print the value and do the same for the next node
        // until there are no more node left
        while(current !== null){
            console.log(current.value);
            current = current.next;
        }
    }

    insertAt(value, index){
    }

    removeAt(index){
    }

}

const newList = new LinkedList();

newList.append(10);
newList.append(20);
newList.append(30);
newList.append(40);

console.log(`length: ${newList.length}, list:`);
newList.toString();

newList.pop();
console.log(`length: ${newList.length}, new list:`);

newList.toString();
