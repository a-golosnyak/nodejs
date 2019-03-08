memoization.cache = {};

function memoization(cb){
	const fnKey = cb.name || cb;
	let cacheData;

	if(!memoization.cache[fnKey]){
		memoization.cache[fnKey] = {};
	}

	cacheData = memoization.cache[fnKey];

	return function(...args) {
		const argumentsKey = args.join(',');

		if (!cacheData[argumentsKey]) {
			console.log('calculating...');
			cacheData[argumentsKey] = cb.aplly(null, args);
		}

		return cacheData[argumentsKey];
	};
}

let cache = new Map();

function memoization(cb){
	const fnKey = cb.name || cb;
	let cacheData;

	if(!memoization.cache[fnKey]){
		memoization.cache[fnKey] = {};
	}

	cacheData = cache.set[fnKey];

	return function(...args) {
		const argumentsKey = args.join(',');
		
		if (!cacheData[argumentsKey]) {
			console.log('calculating...');
			cacheData[argumentsKey] = cb.aplly(null, args);
		}

		return cacheData[argumentsKey];
	};
}