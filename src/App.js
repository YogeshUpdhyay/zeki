import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import React from 'react'

import Admin from "./pages/admin/Admin";
import Landing from "./pages/landing/Landing";
import "./App.css"


export default function App() {
  return (
    <Router>
        <div>
            <Routes>
                <Route path="/" element={<Landing />}>
                </Route>
                <Route path="/admin" element={<Admin />}>
                </Route>
            </Routes>
        </div>
    </Router>
    
  )
}

