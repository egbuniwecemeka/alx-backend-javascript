import { uploadPhoto, createUser } from "./utils";

export function handleProfileSignup() {
    Promise.all(uploadPhoto, createUser)
    .then(([uploadResult, userResult]) => {
        console.log(uploadResult.body, userResult.firstName, userResult.lastName);
    }).catch(() => {
        console.log(Error('Signup system offline'));
    }).finally(() => {
        console.log('Promise settled');
    })
}