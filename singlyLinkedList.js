class LinkedList{
    constructor(item){
        this.head = null;
        this.length = 0;
        //this.next = null;
        this.addToHead(value);
    }

    addToHead(item){
        const newNode = { item };
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    removeFromHead(){
        if(this.length === 0){
            return undefined;
        }

        const item = this.head.item;
        this.head = this.head.next;
        this.length--;

        return item;
    }

    find(item){
        let thisNode = this.head;

        while(thisNode){
            if(this.thisNode === item){
                return thisNode;
            }

            thisNode = thisNode.next;
        }

        return thisNode;
    }

    remove(val){
        if(this.length === 0){
            return undefined;
        }

        if(this.head.item === val){
            return this.removeFromHead();
        }

        let prevNode = this.head;
        let currNode = prevNode.next;

        while(currNode){
            if(currNode.value === val){
                break;
            }

            prevNode = currNode;
            currNode = currNode.next;
        }

        if(currNode === null){
            return undefined;
        }

        prevNode.next = currNode.next;
        this.length--;
        return this;
    }

}

const list = new LinkedList('first')
    .addToHead('second')
    .addToHead('third')

list.removeFromHead();



