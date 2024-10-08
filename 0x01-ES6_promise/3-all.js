import { uploadPhoto, createUser } from './utils';

export function handleProfileSignup() {
    return Promise.all([uploadPhoto(), createUser()])
    .then((value) => {
      const {body} = value[0];
      const {firstName, lastName} = value[1];
      console.log(`${body} ${firstName} ${lastName}`)
    }).catch(() => {
      console.log(Error('Signup system offline'));
    });
}
