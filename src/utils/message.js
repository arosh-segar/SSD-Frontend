
const encrypt = new JSEncrypt()// eslint-disable-line

// encrypt.setPrivateKey(process.env.privateKey);


const REACT_APP_PUBLIC_KEY ="-----BEGIN PUBLIC KEY-----MIICITANBgkqhkiG9w0BAQEFAAOCAg4AMIICCQKCAgBgI/xIltLuqOqg8zh7R0fe" +
    "Ab3jpfRV7fF81ZrjD2IMpHlayuZ2ZZufhUog25w37LmoCU6Gd3dsYZIDcEzD0Sxu" +
    "69HQ3+j+QT8yyGbU9uH9Mmi9F9zteN5Z3fq8TN5OvIOjMxTpSzn4yV/PH5/uket4" +
    "hmCmsW0pHvMrQEU0UgzE6N0g/1NhkkNmUHnUgpcUrJ8raj88c8G6F2d21ox891DY" +
    "z9TCTkypkBo5mdt57i0jqTy9YiIMOxAJxKAN3wdYf4/s1crFntjQVSG2I5S9epeP" +
    "86dTI4FRGELX3EpYXyiI3NcNixO624S4dbMG5Tju5zwKM0iHozWoEthGPcWRgeVr" +
    "VHnDmcu2MhFJjAfDG2v0TBIxv4DN9431N+stRlokfuYeRaFdKxk1vlYzn2JKZLGa" +
    "WRuKoJP8NYehSHP/zJRfypYKeRCMmcJwzpsCxjKZJfFLsfsVrs1R/2aEpd8LgEOa" +
    "issqzId5LagLv34jOw30EbDYRa/wAc9XVYv1WqADqaG22Jt8jQ4UqyH/np8AZc8j" +
    "BtBQog8z79o33iJD76oRX9qfl2oZv0NBnszgPutneqITrKE5lYSyXBSHfmnywf4F" +
    "Bif04FEnzzdFBCfycRlLuRek/qNUyV9JXsBk+6uaYxfSSYrwONugRYi+BcAcU4Ve" +
    "I5sm51k6g6aA9dQjb55qSwIDAQAB" +
    "-----END PUBLIC KEY-----"

export const encryptText = (text) => {
    encrypt.setPublicKey(REACT_APP_PUBLIC_KEY);
    console.log(REACT_APP_PUBLIC_KEY.toString())
    return encrypt.encrypt(text);
}

// import crypto from "crypto-js";
//
// export const encryptText = (text) => {
//     return crypto.SHA256(text).toString()
// }
