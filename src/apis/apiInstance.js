// import fs from 'fs';
// import https from 'https';
import axios from 'axios'

// const httpsAgent = new https.Agent({
//     cert: fs.readFileSync('secrets/clientcert.pem'),
//     key: fs.readFileSync('secrets/clientkey.pem'),
//     ca: fs.readFileSync('secrets/clientcsr.pem'),
// });

export const apiInstance = axios.create({
    baseURL:'https://localhost:8000/api',
})





