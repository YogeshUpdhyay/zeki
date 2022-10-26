import "./Login.css";
import Button from "../../components/Button";

const Login = (props) => {
    return (
        <div className="login-container">
            <div className="form-element">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
            </div>

            <div className="form-element">
                <label htmlFor="password">Password</label>
                <input type="password" name="passowrd" id="password" />
            </div>

            <Button
                color="purple"
                whileTap={{ scale: 0.9 }}
                onClick={props.handleLogin}
            >
                Submit
            </Button>
        </div>
    );
};

export default Login;
