#!/usr/bin/node

export default function appendToEachArrayValue(array, appendString) {
  let res = [];
  for (let idx of array) {
    res.push(appendString + idx);
  }
  return res;
}
