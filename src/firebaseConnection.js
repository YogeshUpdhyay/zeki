// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getRemoteConfig,
    getValue,
    fetchAndActivate,
} from "firebase/remote-config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBacNHUtAMPd28rrdhiUhBt8p5G4XMp6Q4",
    authDomain: "pokistudios-11d34.firebaseapp.com",
    projectId: "pokistudios-11d34",
    storageBucket: "pokistudios-11d34.appspot.com",
    messagingSenderId: "443068369481",
    appId: "1:443068369481:web:bf17a6fd2be12427844d98",
    measurementId: "G-P7PR4YY0LD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const remoteConfig = getRemoteConfig(app);
fetchAndActivate(remoteConfig)
    .then(() => {
        const val = getValue(remoteConfig, "testParam");
        console.log(val);
    })
    .catch((err) => {
        console.log(err);
    });

export default app;
export { app, remoteConfig };
