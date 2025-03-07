#!/usr/bin/node

import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
  .then((result) => {
    result.forEach(({ status, value, reason }) => {
        if (status === 'fulfilled') {
            console.log(value);
        } else {
            console.log(reason);
        }
    });
  });
}
