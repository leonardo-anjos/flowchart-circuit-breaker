const axios = require('axios');
const CircuitBreaker = require('./circuit-breaker.class')

const fetchDataFromExternalVendor = async () => {
  return await axios.get('https://jsonplaceholder.typicode.com/posts')
}

// sample request to fetch data asynchronously
const request = fetchDataFromExternalVendor();

// // wrap the request within a circuit breaker object
// const circuitBreakerObject = new CircuitBreaker(request, { failureThreshold: 4, timeout: 4000 });

// // fire the request
// circuitBreakerObject.fire()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(`some error occurred = ${err.message}`))