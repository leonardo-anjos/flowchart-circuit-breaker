const axios = require('axios');
import CircuitBreaker from './circuit-breaker.class';

// sample request to fetch data asynchronously
// const request = axios fetchDataFromExternalVendor();

// wrap the request within a circuit breaker object
const circuitBreakerObject = new CircuitBreaker(request, { failureThreshold: 4, timeout: 4000 });

// fire the request
circuitBreakerObject.fire()
  .then((data) => console.log(data))
  .catch((err) => console.log(`some error occurred = ${err.message}`))