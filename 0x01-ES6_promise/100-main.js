#!/usr/bin/node

import asyncUploader from "./100-await";

const test = async () => {
  const value = await asyncUploader();
  console.log(value);
}

test();
