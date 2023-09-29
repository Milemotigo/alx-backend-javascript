import {uploadPhoto, createUser} from "./utils.js";

export function handleProfileSignup() {
    return Promise.all([uploadPhoto(), createUser()])

    .then (resp => {
        const photos = resp[0];
        const usr = resp[1];

        if (photos.body && usr.firstName && usr.lastName){
            console.log(`${photos.body} ${usr.firstName} ${usr.lastName}`);
        } 
        else{
            console.log("Error: N");
        }
    })
}
