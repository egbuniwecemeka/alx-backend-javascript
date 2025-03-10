#!/usr/bin/node

import loadBalancer from "./7-load_balancer";

const UKSuccess = 'Downloading from UK is faster';
const FrSuccess = 'Downloading from FR is faster';

const PromiseUk = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, UKSuccess);
})

const PromiseUkSlow = new Promise((resolve, reject) => {
    setTimeout(resolve, 400, UKSuccess);
})

const PromiseFr = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, FrSuccess);
})

const test = async () => {
    console.log(await loadBalancer(PromiseUk, PromiseFr));
    console.log(await loadBalancer(PromiseUkSlow, PromiseFr));
}

test();
