import "./Register.css"

function Register() {
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
                        <input placeholder="Name" type="text" className="loginInput" />
                        <input placeholder="Email" type="email" className="loginInput" />
                        <input placeholder="Password" type="password" className="loginInput" />
                        <input placeholder="Re-Enter Password" type="password" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <hr className="hr"/>
                        <span className="alreadyAcc">Already Have an Account ?</span>
                        <button className="registerBtn">Log In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register