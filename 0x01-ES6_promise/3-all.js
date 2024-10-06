import { uploadPhoto, createUser } from './utils';

export function handleProfileSignup() {
<<<<<<< HEAD
  Promise.all([uploadPhoto(), createUser()])
=======
    return Promise.all([uploadPhoto(), createUser()])
>>>>>>> 003570f145533e0b8ee5be5200a2146e2d00f82a
    .then(([photoResult, userResult]) => {
      console.log(photoResult.body, userResult.firstName, userResult.lastName);
    }).catch(() => {
      console.log(Error('Signup system offline'));
    });
}
