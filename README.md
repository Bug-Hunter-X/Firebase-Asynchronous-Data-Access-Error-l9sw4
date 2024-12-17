# Firebase Asynchronous Data Access Error

This repository demonstrates a common error when working with Firebase's asynchronous data fetching methods and provides a solution.

The `bug.js` file shows how an error can occur if you try to access data from a document snapshot before the data is fully loaded. The `bugSolution.js` file provides the correct way to handle the asynchronous operation using `.then()` to access the data once it's available.

## How to Reproduce

1. Clone this repository.
2. Install the Firebase SDK: `npm install firebase`
3. Configure your Firebase project (replace placeholders with your actual config).
4. Run `bug.js` and observe the error. 
5. Run `bugSolution.js` to see the corrected implementation. 

## Solution

The solution involves using promises and asynchronous programming best practices. Always wait for the promise to resolve before accessing the data.