# flowchart-circuit-breaker

This is a `CircuitBreaker` class that has the following methods:

1. Fire: To make requests
2. Success: Triggered on success
3. Fail: Triggered on a failure

The core idea is simple, let’s understand it with the help of a flowchart:

![Alt text](https://blog.logrocket.com/wp-content/uploads/2023/02/4-circuit-breaker-process-flowchart.png)

We start with a Closed state, meaning requests are going through. If the number of failures is more than a failureThreshold, the circuit shifts into the Open state, meaning no more requests can go through.

ref.: https://blog.logrocket.com/use-circuit-breaker-node-js/