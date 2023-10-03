export const weakMap = new WeakMap()

export default function queryAPI(endpoint) {
    let numOfQueries = weakMap.get(endpoint) || 0;

    if(numOfQueries >= 5){
        throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, numOfQueries + 1);
}

const endpoint = { protocol: 'http', name: 'getUsers' };
weakMap.get(endpoint);

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
