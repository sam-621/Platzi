/*
FIFO
bottom       top
  OK    OK    OK
*/

class NewNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	enqueue(value) {
		const newNode = new NewNode(value);
		if (this.length === 0) {
			this.first = newNode;
			this.last = newNode;
			this.length++;

			return this;
		}
		const holdingPointer = this.last;
		this.last = newNode;
		this.last.next = holdingPointer;
		this.length++;

		return this;
	}

	//quita el primero
	dequeue() {
		if (this.length === 0) {
			return this;
		}
		const prevNode = this.searchPrevNode();
		this.first = prevNode;
		this.first.next = null;
		this.length--;

		if (this.length === 0) {
			this.first = null;
			this.last = null;
		}
		return this;
	}

	searchPrevNode() {
		let currentNode = this.last;
		for (let i = 2; i < this.length; i++) {
			currentNode = currentNode.next;
		}

		return currentNode;
	}
	peek() {
		return this.first;
	}
}

const queue = new Queue();
