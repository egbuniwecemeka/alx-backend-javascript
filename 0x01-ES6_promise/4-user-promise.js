export default function signUpUser(firstName, lastName) {
    return  new Promise((resolve, reject) => {
        const profile = {
            firstName,
            lastName,
        };

        if (profile){
            resolve(profile);
        } else {
            reject(Error('Promise object did not resolve!'));
        }
    })
}