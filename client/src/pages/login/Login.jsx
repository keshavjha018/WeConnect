import "./Login.css"

function Login() {
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
                    <div className="loginBox">
                        <input placeholder="Email" type="email" className="loginInput" />
                        <input placeholder="Password" type="password" className="loginInput" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgotten Password ?</span>
                        <hr className="hr"/>
                        <button className="registerBtn">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login