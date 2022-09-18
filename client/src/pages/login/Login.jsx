import "./Login.css"
import {useRef} from "react";

function Login() {

    // Submitted Email-Password
    const email = useRef();
    const password = useRef();

    const handleSubmit=(e)=>{
        e.preventDefault();         //prevents reloading page on Submit
        console.log(email);
    }

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">WeConnect</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on WeConnect.
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleSubmit}>
                        <input placeholder="Email" type="email" required className="loginInput" ref={email} />
                        <input placeholder="Password" type="password" required className="loginInput" ref={password} />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgotten Password ?</span>
                        <hr className="hr"/>
                        <button className="registerBtn">Create a New Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login