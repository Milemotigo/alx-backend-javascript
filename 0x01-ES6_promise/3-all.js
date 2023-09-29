 import { uploadPhoto, createUser } from "./utils.js";

 export function handleProfileSignup() {
    return Promise.all([uploadPhoto(), createUser()])

    .then((resp) => console.log(`${resp[0].body} ${resp[1].firstName} ${resp[1].lastName}`)
    )
    .catch(() => console.log('Signup system offline'));
 }
 handleProfileSignup();
// import { uploadPhoto, createUser } from './utils';

// export default function handleProfileSignup() {
//   return Promise.all([uploadPhoto(), createUser()])
//     .then((result) => console.log(`${result[0].body} ${result[1].firstName} ${result[1].lastName}`))
//     .catch(() => console.log('Signup system offline'));
// }