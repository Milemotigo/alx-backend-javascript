 import { uploadPhoto, createUser } from "./utils.js";

 export function handleProfileSignup() {
    return Promise.all([uploadPhoto(), createUser()])

    .then((resp) => {
         const photos = resp[0];
         const usr = resp[1];
         console.log(`${photos.body} ${usr.firstName} ${usr.lastName}`)
     })
    .catch(() => console.log('Signup system offline'));
 }

// import { uploadPhoto, createUser } from './utils';

// export default function handleProfileSignup() {
//   return Promise.all([uploadPhoto(), createUser()])
//     .then((result) => console.log(`${result[0].body} ${result[1].firstName} ${result[1].lastName}`))
//     .catch(() => console.log('Signup system offline'));
// }