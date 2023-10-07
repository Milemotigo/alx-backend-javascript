// Create a WeakMap to store the number of times each endpoint is queried
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const countl = weakMap.get(endpoint) || 0;
  if (countl >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, countl + 1);
}