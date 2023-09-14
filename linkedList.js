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
        if(this.tail === null){
            const newNode = new Node(value);

            this.head = newNode;
            this.tail = newNode;
            
            this.length ++;

        } else{

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
    }
    
    contains(value){
    }

    find(value){
    }

    toString(){
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




