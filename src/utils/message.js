// import {JSEncrypt} from 'jsencrypt'
//
// const encrypt = new JSEncrypt()
//
// encrypt.setPrivateKey(process.env.privateKey);
// encrypt.setPrivateKey(process.env.publicKey);
//
// export const encryptText = (text) => {
//     return encrypt.encrypt(text);
// }

import crypto from "crypto-js";

export const encryptText = (text) => {
    return crypto.SHA256(text).toString()
}
