/*  10
 4      20
2  8  17  170
*/

class NewNode {
	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value;
	}
}
class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(value) {
		const newNode = new NewNode(value);
		if (this.root === null) {
			this.root = newNode;
		} else {
			let currentNode = this.root;
			while (true) {
				if (value < currentNode.value) {
					if (!currentNode.left) {
						currentNode.left = newNode;
						return this;
					}
					currentNode = currentNode.left;
				} else {
					if (!currentNode.right) {
						currentNode.right = newNode;
						return this;
					}
					currentNode = currentNode.right;
				}
			}
		}
	}
	search(value) {
		let currentNode = this.root;
		while (true) {
			try {
				if (currentNode.value === value) {
					return currentNode;
				}
				if (value > currentNode.value) {
					currentNode = currentNode.right;
				}
				if (value < currentNode.value) {
					currentNode = currentNode.left;
				}
			} catch (err) {
				return "Not founded";
			}
		}
	}
}

const tree = new BinarySearchTree();
