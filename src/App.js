import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Admin from "./pages/admin/Admin";
import Landing from "./pages/landing/Landing";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import AppContext from "./contexts";
import HashLoader from "react-spinners/HashLoader";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFunctions } from "firebase/functions";
import { fetchAndActivate, getRemoteConfig } from "firebase/remote-config";

const theme = {
    black: "#1A1A1A",
    purple: "#C9A4FF",
    green: "#A4D677",
    yellow: "#F8D457",
    beige: "#FDF8EA",
    pink: "#FEB3EB",
    blue: "#7894FF",
    white: "#FFFFFF",
};

const firebaseConfig = {
    apiKey: "AIzaSyBacNHUtAMPd28rrdhiUhBt8p5G4XMp6Q4",
    authDomain: "pokistudios-11d34.firebaseapp.com",
    projectId: "pokistudios-11d34",
    storageBucket: "pokistudios-11d34.appspot.com",
    messagingSenderId: "443068369481",
    appId: "1:443068369481:web:bf17a6fd2be12427844d98",
    measurementId: "G-P7PR4YY0LD",
};

export default function App() {
    const [appConfig, setAppConfig] = useState({});
    const [functions, setFunctions] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);

        // initialize analytics
        const analytics = getAnalytics(app);

        // functions
        const functions = getFunctions(app, "asia-south1");
        setFunctions(functions);

        //  Initialize remote config
        const remoteConfig = getRemoteConfig(app);
        remoteConfig.settings.minimumFetchIntervalMillis = 3600000;
        remoteConfig.defaultConfig = {
            aboutSection: {
                robin: "Hey, I AM ROBIN AND I LOVE TYPEFACES & FONTS",
                shweta: "Hey, I AM SHWETA AND I LOVE LOREM IPSUM DOLOR",
            },
            workSection: {
                allProjects: [],
                nfts: [],
                eCommerce: [],
                dashboards: [],
                games: [],
                mobileInterfaces: [],
            },
            reviewsSection: [
                {
                    companyName: "SLASHERGENO",
                    ratings: 5,
                    text: "The UI that they created is absolutely stunning and way better than our previous design, excellent job! Solid work as usual, have worked several times with him, just very responsive and creative.",
                    country: "United States",
                },
                {
                    companyName: "RYANMOLLAUN",
                    rating: 5,
                    text: "Robin is very skilled in design and listens to what your requirements are, taking this into account with his designs. I was pleasantly surprised and so glad to have found him as we need long term design help. What a find! Thank you Robin.",
                    country: "Australia",
                },
                {
                    companyName: "EUNFLUSS",
                    rating: 5,
                    text: "It really was better than I expected. In addition to offering their service at an excellent price, the quality of the final product was surprising. I will hire him again for other jobs. I recommend it.",
                    country: "Argentina",
                },
                {
                    companyName: "alejandrarg13",
                    rating: 4,
                    text: "My website design was for an NFT collection and it turned out GREAT. Super happy and pleased!! He did all my revisions and it was what I envisioned.",
                    country: "United States",
                },
                {
                    companyName: "SLASHERGENO",
                    ratings: 5,
                    text: "The UI that they created is absolutely stunning and way better than our previous design, excellent job! Solid work as usual, have worked several times with him, just very responsive and creative.",
                    country: "United States",
                },
                {
                    companyName: "RYANMOLLAUN",
                    rating: 5,
                    text: "Robin is very skilled in design and listens to what your requirements are, taking this into account with his designs. I was pleasantly surprised and so glad to have found him as we need long term design help. What a find! Thank you Robin.",
                    country: "Australia",
                },
                {
                    companyName: "EUNFLUSS",
                    rating: 5,
                    text: "It really was better than I expected. In addition to offering their service at an excellent price, the quality of the final product was surprising. I will hire him again for other jobs. I recommend it.",
                    country: "Argentina",
                },
                {
                    companyName: "alejandrarg13",
                    rating: 4,
                    text: "My website design was for an NFT collection and it turned out GREAT. Super happy and pleased!! He did all my revisions and it was what I envisioned.",
                    country: "United States",
                },
            ],
            globalConfig: {
                fiverrUrl: "",
                emailId: "pokistudios@gmail.com",
                phoneNumber: "+91 7738 617 600",
            },
        };

        fetchAndActivate(remoteConfig)
            .then(() => {
                console.log("remote", remoteConfig);
                setAppConfig(remoteConfig);
                setIsLoading(false);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="loading-spinner">
                    <HashLoader color="#7894FF" />
                </div>
            ) : (
                <AppContext.Provider value={{ appConfig, functions }}>
                    <ThemeProvider theme={theme}>
                        <Router>
                            <div>
                                <Routes>
                                    <Route
                                        path="/"
                                        element={<Landing />}
                                    ></Route>
                                    <Route
                                        path="/admin"
                                        element={<Admin />}
                                    ></Route>
                                </Routes>
                            </div>
                        </Router>
                    </ThemeProvider>
                </AppContext.Provider>
            )}
        </>
    );
}
