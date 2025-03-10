#!/usr/bin/node

import divideFunction from "./8-try";

try {
  console.log(divideFunction(10, 2));
  console.log(divideFunction(10, 0));
} catch (error) {
  console.log('Error message:', error.message);  
}