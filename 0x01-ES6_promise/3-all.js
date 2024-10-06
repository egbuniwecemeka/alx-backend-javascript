import { uploadPhoto, createUser } from "./utils";

export function handleProfileSignup() {
    Promise.all([uploadPhoto(), createUser()])
    .then(([photoResult, userResult]) => {
        console.log(photoResult.body, userResult.firstName, userResult.lastName);
    }).catch(() => {
        console.log(Error('Signup system offline'));
    });
}