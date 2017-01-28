const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
    }

    append(data, currentElement) {
        if(this.length == 0){
            this._head = this._tail = new Node(data);
            this.length++;
        }else{
            let el = currentElement || this._head;
            if(el.next == null) {
                let newNode = new Node(data, el);
                el.next = newNode;
                this._tail = newNode;
                this.length++;
            }else{
                return this.append(data, el.next);
            }
        }
        return this;
    }

    head() {
        return this._head ? this._head.data : null;
    }

    tail() {
        return this._tail ? this._tail.data : null;
    }

    at(index, flag) {
        let el = this._head;
        for(let i = 0; i < this.length; i++){
            if( i == index){
                if(flag){
                    return el;
                }
                return el.data;
            }
            el = el.next;
        }
    }

    insertAt(index, data) {
        let newNode = new Node(data);
        let element = this.at(index, true);
        if(element){
            newNode.next = element;
            newNode.prev = element.prev;
            element.prev = newNode;
            newNode.prev.next = newNode;
        }
        return this;    
    }

    isEmpty() {
        return !this.length;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        let element = this.at(index, true);
        if(element){
            if(element.prev){
                element.prev.next = element.next;   
            }
            if(element.next){
                element.next.prev = element.prev;   
            }
            
        }   
        return this;    
    }

    reverse() {
        let values = [];
        let el = this._tail;
        for(let i = 0 ; i < this.length; i++){
            values.push(el.data);
            el = el.prev;
        }
        el = this._head;
        for(let i = 0 ; i < this.length; i++){
            el.data = values[i];
            el = el.next;
        }
        return this;
    }

    indexOf(data) {
        let el = this._head;
        for(let i = 0; i < this.length; i++){
            if( el.data == data){
                return i;
            }
            el = el.next;
        }
        return -1;
    }
}

module.exports = LinkedList;
