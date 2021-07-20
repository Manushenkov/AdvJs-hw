function allKeysAndSymbols(object) {
	if (object.__proto__ === null) {
		return Reflect.ownKeys(object)
	}
	return [...Reflect.ownKeys(object), ...allKeysAndSymbols(object.__proto__)]
}

console.log(allKeysAndSymbols({}))
console.log('allKeysAndSymbols({})')