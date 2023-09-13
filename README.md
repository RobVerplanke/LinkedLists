# Linked List Assignment

This assignment, part of The Odin Project curriculum, is designed as an introduction to the concept of linked lists. My task is to create two essential components: a LinkedList class/factory and a Node class/factory. The LinkedList will represent the full list, while the Node will contain a value property and a link to the nextNode, both set as null by default.

## Assignment Requirements
You will need to build the following functions in your linked list class:

### 1. append(value)
Add a new node containing value to the end of the list.
### 2. prepend(value)
Add a new node containing value to the start of the list.
### 3. size
Return the total number of nodes in the list.
### 4. head
Return the first node in the list.
### 5. tail
Return the last node in the list.
### 6. at(index)
Return the node at the given index.
### 7. pop
Remove the last element from the list.
### 8. contains(value)
Return true if the passed-in value is in the list and false otherwise.
### 9. find(value)
Return the index of the node containing value, or null if not found.
### 10. toString
Represent your LinkedList objects as strings, allowing you to print and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null.

## Extra Credit
If you're up for a challenge, consider implementing these additional functions:

### 11. insertAt(value, index)
Insert a new node with the provided value at the given index.
### 12. removeAt(index)
Remove the node at the given index.
Extra Credit Tip: When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their nextNode links updated.