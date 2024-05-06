class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    at(index) {
        if (index < 0 || index >= this.size) return null;
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.nextNode;
        }
        return current;
    }

    pop() {
        if (!this.head) return null;
        let current = this.head;
        let prev = null;
        while (current.nextNode) {
            prev = current;
            current = current.nextNode;
        }
        if (prev) {
            prev.nextNode = null;
            this.tail = prev;
        } else {
            this.head = null;
            this.tail = null;
        }
        this.size--;
        return current;
    }

    contains(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) return true;
            current = current.nextNode;
        }
        return false;
    }

    find(value) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.value === value) return index;
            current = current.nextNode;
            index++;
        }
        return null;
    }

    toString() {
        let result = '';
        let current = this.head;
        while (current) {
            result += `(${current.value}) -> `;
            current = current.nextNode;
        }
        result += 'null';
        return result;
    }

    // Extra Credit
    insertAt(value, index) {
        if (index < 0 || index > this.size) return false;
        if (index === 0) {
            this.prepend(value);
            return true;
        }
        if (index === this.size) {
            this.append(value);
            return true;
        }
        const newNode = new Node(value);
        let prev = null;
        let current = this.head;
        for (let i = 0; i < index; i++) {
            prev = current;
            current = current.nextNode;
        }
        prev.nextNode = newNode;
        newNode.nextNode = current;
        this.size++;
        return true;
    }

    removeAt(index) {
        if (index < 0 || index >= this.size) return null;
        if (index === 0) {
            const removedNode = this.head;
            this.head = this.head.nextNode;
            if (!this.head) {
                this.tail = null;
            }
            this.size--;
            return removedNode;
        }
        let prev = null;
        let current = this.head;
        for (let i = 0; i < index; i++) {
            prev = current;
            current = current.nextNode;
        }
        prev.nextNode = current.nextNode;
        if (!current.nextNode) {
            this.tail = prev;
        }
        this.size--;
        return current;
    }
}
