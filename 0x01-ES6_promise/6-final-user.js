// import signUpUser from "./4-user-promise";
// import uploadPhoto from "./5-photo-reject";

// export default function handleProfileSignup(firstName, lastName, fileName) {
//     return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
//         .then((results) => {
//             const signUpResponse = results[0];
//             const photoResponse = results[1];

//             return {
//                 status: {
//                     signUp: signUpResponse.status,
//                     photo: photoResponse.status,
//                 },
//                 value: {
//                     signUp: signUpResponse.value,
//                     photo: photoResponse.value,
//                 },
//             };
//         });
// }

import { signUpUser } from './4-user-promise';
import { uploadPhoto } from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const user = await signUpUser(firstName, lastName).then((value) => ({
    status: 'fulfilled',
    value,
  })).catch((error) => ({
    status: 'rejected',
    value: error.toString(),
  }));

  const photo = await uploadPhoto(fileName).then((value) => ({
    status: 'fulfilled',
    value,
  })).catch((error) => ({
    status: 'rejected',
    value: error.toString(),
  }));

  return [user, photo];
}