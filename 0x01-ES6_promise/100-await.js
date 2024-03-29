import { uploadPhoto, createUser } from "./utils";

export default async function asyncUploadUser() {

    try {
        const photoResponse = await uploadPhoto();
        const userResponse = await createUser()

        return {
            photo: photoResponse,
            user: userResponse
        };
        
    } catch (error) {
        console.error("Error in asyncUploadUser:", error);
        return {
            photo: null,
            user: null,
        };
    }
}
// const test = async () => {
//     const value = await asyncUploadUser();
//     console.log(value);
// };

// test();
