import { useState } from "react";
import Login from "../../sections/Login/Login";
import Config from "../../sections/Config/Config";

const Admin = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        const values = {
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
        };
        console.log(values);
        setIsLoggedIn(true);
    };
    return (
        <>{!isLoggedIn ? <Login handleLogin={handleLogin} /> : <Config />}</>
    );
};

export default Admin;
