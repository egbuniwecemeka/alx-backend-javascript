import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, fileName) {
    const user = signUpUser(firstName, lastName);
    const photo = uploadPhoto(fileName);
    return Promise.allSettled([user, photo])
        .then((results) => {
            return results.map((result) => {
                return {
                    status: result.status,
                    value: result.status === 'fulfilled' ? result.value : result.reason,
                };
            });
        });
}