/*
TABLA DE HASH

TABLA = [null, null, [[key, value]], null, null]

es un array de arrays de arrays

CURRENT = [[key, value]]
CURRENT[i][0]
//key
*/

class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}

	hashMethod(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash; //siempre retorna el mismo hash por key
	}
	set(key, value) {
		const address = this.hashMethod(key);
		console.log(address);
		//si esta vacio, coloca una array,
		//si no esta vacio es por que ya fue creado el array
		if (!this.data[address]) {
			this.data[address] = []; //este
		}
		this.data[address].push([key, value]);
		return this.data;
	}
	get(key) {
		const address = this.hashMethod(key);
		//me da el primer array,
		//adentro de él hay otro array que contiene otros arrays con los datos
		const currentBucket = this.data[address];
		if (currentBucket) {
			for (let i = 0; i < currentBucket.length; i++) {
				//si el elemento 0 de mi tercer array array es igual a la key
				if (currentBucket[i][0] === key) {
					return currentBucket[i][1]; //retornamos el valor
				}
			}
		}
		return undefined;
	}
	deleteData(key) {
		const address = this.hashMethod(key);
		const currentBucket = this.data[address];

		if (currentBucket) {
			for (let i = 0; i < currentBucket.length; i++) {
				if (currentBucket[i][0] === key) {
					delete currentBucket[i];
				}
			}
		}
		return undefined;
	}
}

const myHashTable = new HashTable(50);
