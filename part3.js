class MySet {
	constructor(arr) {
		this.set = []
		const hash = {}

		for (let elem of arr) hash[elem] = 0

		for (let key in hash) this.set.push(key)

		this.size = this.set.length

	}
    get [Symbol.toStringTag]() { return 'MySet'}
    [Symbol.iterator]() { return this.set.values() }

    has(elemToCheck) {
        // return !!~this.set.indexOf(elemToCheck)

        return this.set.includes(elemToCheck)
    }

    add(newVal) {
        if (this.set.hasOwnProperty(newVal)) return

        this.set.push(newVal)
        this.size += 1
    }
    
    delete(elemToDelete) {
        const index = this.set.indexOf(elemToDelete)
        if (index === -1) return

        this.set.splice(index, 1)
        this.size -= 1
    }
    
    clear() {
        this.set = []
        this.size = 0
    }

	entries() { 
        return this.set.map(e => [e,e])
    }
	values() { return this.set }
	keys() { return this.set }


    forEach(callback, thisArg) {
        this.set.forEach(callback, thisArg)
    }
}

const set = new MySet([4, 8, 15, 15, 16, 23, 42]);

// хранит только уникальные значения
console.log([...set]); // [ 4, 8, 15, 16, 23, 42 ]

// есть свойство size
console.log(set.size); // 6

// работает в цикле for-of
for (const item of set) {
    console.log(item); // 4 8 15 16 23 42
}

// есть методы keys, values, entries
for (const item of set.entries()) {
    console.log(item); // [ 4, 4 ] [ 8, 8 ] ...
}

// есть метод clear
set.clear();
console.log(set.size); // 0

const object = {
    getValue () { return this.value }
}

const data = {
    value: 42
}

// есть метод add
set.add(object);
set.add(data);

// есть метод delete
set.delete(data);

// есть метод has
console.log(set.has({})); // false
console.log(set.has(object)); // true
console.log(set.has(data)); // false

// и кое-что еще
console.log(set === set.valueOf()) // true
console.log(String(set)) // [object MySet]
console.log(Object.prototype.toString.call(set)) // [object MySet]

// задание со звездочкой *
// есть forEach, который делает какие-то странные вещи...
set.forEach(function (item) {
    console.log(item.getValue.call(this)); // 42
}, data)