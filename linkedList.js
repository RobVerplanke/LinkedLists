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
        const newNode = new Node(value);

        // If the list is empty, create a new node and refer the list head and tail to it
        if(!this.tail){
            this.head = this.tail = newNode;
        } else{

            // If the list is not empty, create new node and set new node as tail node
            this.tail.next = newNode;
            newNode.prev = this.tail;
            newNode.next = null;
            this.tail = newNode;
        }

        this.length ++;
    }

    prepend(value){
        const newNode = new Node(value);

        // If the list is empty, create a new node and refer the head and tail to it
        if(!this.tail){
            this.head = this.tail = newNode;
        } else{

            // If the list is not empty, create a new node and set new node as head node
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length ++;
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

    at(index) {

        // Check for valid index
        if (index < 0 || index >= this.length) {
            console.log('Not a valid index');
            return null;
        }
    
        let i = 0;
        let current = this.head;
    
        // Return the value of the node at index
        while (i < this.length) {
            if (i === index) {
                return current.value; 
            }
    
            current = current.next;
            i++;
        }
    
        return null;
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
      
        // If there are more nodes in the list, remove the 'next' reference of the tail node
        // and set the previous node as new tail
        let newTail = this.tail.prev;
        newTail.next = null;

        this.tail = newTail;
        this.length--;
    }

    contains(value){

        let i = 0;
        let current = this.head;

        while(i < this.length){
            if(current.value === value){
                return true;
            }
            current = current.next;
            i++;
        }

        return false;
    }

    find(value){

        let i = 0;
        let current = this.head;

        while(i < this.length){
            if(current.value === value){
                return i;
            }
            current = current.next;
            i++;
        }

        return null;
    }

    toString(){
        let current = this.head;

        // If there is a 'head' node, print the value and do the same for each next node
        while(current !== null){
            console.log(current.value);
            current = current.next;
        }
    }

    insertAt(value, index){
    
        let i = 0;
        let current = this.head;
        let newNode = new Node(value);
    
        if(index < 0 || index > this.length) return console.log("Not a valid index");

        // If index is the first node in the list, add new node at the beginning
        if(index === 0){
            this.prepend(value);
            return;
        }

        // If index is the last node in the list, add new node at the end
        if(index === this.length){
            this.append(value);
            return;
        }

        // If index is between the first and last node, iterate through entire list
        while(i < this.length){
            
            // If index is found, set references of the new node and surrounding nodes
            if(i === index){
                newNode.prev = current.prev;
                current.prev.next = newNode;
                current.prev = newNode;
                newNode.next = current;
                this.length++;
            }

            current = current.next;
            i++;
        }
    }

    removeAt(index){

        let i = 0;
        let current = this.head;

        if(index < 0 || index > this.length) return console.log("Not a valid index");

        // If index is the first node in the list, set new references
        if(index === 0){
            this.head.next.prev = null;
            this.head = this.head.next;
            this.length--;
            return;
        }

        // If index is the last node in the list, set new references
        if(index === this.length){
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
            this.length--;
            return;
        }

        // If index is between the first and last node, set new references
        while(i < this.length){
            if(i === index){
                current.prev.next = current.next;
                current.next.prev = current.prev;
                this.length--;
            }

            current = current.next;
            i++;
        }
    }
}


