import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, fileName) {
    return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
        .then((results) => {
            const signUpResponse = results[0];
            const photoResponse = results[1];

            return {
                status: {
                    signUp: signUpResponse.status,
                    photo: photoResponse.status,
                },
                value: {
                    signUp: signUpResponse.value,
                    photo: photoResponse.value,
                },
            };
        });
}