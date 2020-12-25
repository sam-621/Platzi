// 1 -> 2 -> 3 -> 4 -> 5 -> null
// let singlyLinkedList = {
//   head: {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null,
//         },
//       },
//     },
//   },
// };
class NewNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
		};
		//tail y head apuntan a la misma direccion de memoria
		// y si cambia UNA PROPIEDAD de uno, cambiará en el otro
		this.tail = this.head;
		this.length = 1;
	}
	//insertar al final
	//Esto funciona ya que en el contructor hay una referencia
	//cambiamos UNA PROPIEDAD del tail entonces también cambia en el head
	append(value) {
		const newNode = new NewNode(value); //creamos nueva referencia
		this.tail.next = newNode; //el next del head y el next del tail es el mismo
		this.tail = newNode; //tail y el next de head tienen la misma referencia
		this.length++;
		return this;
		/*
		Entonces ahora tail y ese nodo que se agregó
		el next del head es el next de ese nodo que se agregó
		Ambos next estan referenciados, COMO AL INICIO
		entonces cuando creemos otro nodo simplemente se repetirá el proceso
		*/
	}
	prevent(value) {
		const newNode = new NewNode(value);
		newNode.next = this.head; //hacemos que el next de head sea ahora el next del nuevo nodo
		this.head = newNode; //hacemos que head apunte al nuevo nodo
		this.length++;
		return this;
	}
	insert(value, index) {
		const newNode = new NewNode(value);
		const { currentNode, lastNode } = this.getNodeByIndex(index);
		if (!currentNode && !lastNode) {
			return "No available index";
		}
		lastNode.next = newNode;
		newNode.next = currentNode;
		this.length++;
		return this;
	}
	getNodeByIndex(index) {
		if (index > this.length || index <= 0) {
			return { currentNode: null, lastNode: null };
		}
		let count = 1;
		let controlNode = this.head; //empezamos a recorrer la lista desde el head
		while (count < index - 1) {
			controlNode = controlNode.next;
			count++;
		}
		const lastNode = controlNode;
		const currentNode = controlNode.next;
		return { currentNode, lastNode };
	}
	moveToTail(index) {
		const { currentNode, lastNode } = this.getNodeByIndex(index);
		if (!currentNode && !lastNode) {
			return "No available index";
		}

		lastNode.next = currentNode.next;
		this.tail.next = currentNode;
		this.tail = currentNode;
		currentNode.next = null;
		return this;
	}
}

let singlyLinkedList = new SinglyLinkedList(1);
