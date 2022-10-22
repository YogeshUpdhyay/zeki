import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { app as firebaseApp } from "./firebaseConnection";
import Admin from "./pages/admin/Admin";
import Landing from "./pages/landing/Landing";
import "./App.css";
import { ThemeProvider } from "styled-components";

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

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<Landing />}></Route>
                        <Route path="/admin" element={<Admin />}></Route>
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
}
