class Graph {
	constructor() {
		this.nodes = 0;
		this.adjacentList = {};
	}
	//add node
	addVertex(node) {
		this.adjacentList[node] = [];
		this.nodes++;
	}
	//agregar connexion con otro nodo
	addEdge(node1, node2) {
		this.adjacentList[node1].push(node2);
		this.adjacentList[node2].push(node1);
	}
}
const graph = new Graph();
