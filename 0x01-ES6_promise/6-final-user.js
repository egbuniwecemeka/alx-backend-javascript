#!/usr/bin/node

import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const result = await Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
  return result.map((res) => ({
    status: res.status,
    value: res.status === 'fulfilled' ? res.value : res.reason,
  }));
}
