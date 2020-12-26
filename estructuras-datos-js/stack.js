class NewNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}
	peak() {
		return this.top;
	}
	push(value) {
		const newNode = new NewNode(value);

		if (this.length === 0) {
			this.top = newNode;
			this.bottom = newNode;
			this.length++;
			return this;
		}
		const holdingPointer = this.top; //guardamos el que estaba antes en el top
		this.top = newNode; //hacemos que el top apunte el nuevo
		this.top.next = holdingPointer; //hacemos que el next del top apunte al que antes era el top
		this.length++;
		return this;
	}
	pop() {
		if (this.length === 0) {
			return this;
		}

		this.top = this.top.next;
		this.length--;

		if (this.length === 0) {
			this.bottom = null;
		}
		return this;
	}
}

const stack = new Stack();
