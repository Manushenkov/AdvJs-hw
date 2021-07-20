const proto = { value: 42 }
const obj = Object.create(proto)

Object.defineProperty(obj, 'year', {
	value: 2020,
	writable: true,
	configurable: true,
	enumerable: false
})

const symbol = Symbol('bazzinga')
obj[symbol] = 42

console.log('без proxy')
console.log('value' in obj) // true
console.log('year' in obj) // true
console.log(symbol in obj) // true

const proxy = new Proxy(obj, {
	has(target, property) {
		return target.hasOwnProperty(property)
	}
})

console.log('с proxy')
console.log('value' in proxy) // false
console.log('year' in proxy) // true
console.log(symbol in proxy) // true
