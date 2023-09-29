import {uploadPhoto, createUser} from "./utils.js";

export function handleProfileSignup() {
    return Promise.all([uploadPhoto(), createUser()])

    .then(resp => {
        const photos = resp[0];
        const usr = resp[1];
        console.log(`${photos.body} ${usr.firstName} ${usr.lastName}`); 
    });
}