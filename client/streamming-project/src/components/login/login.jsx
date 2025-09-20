import "./login.css"
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from '@fortawesome/free-solid-svg-icons';


function Login() {
    const { email, setEmail} = useState();

    return (
        <div className="login">
            <nav className="navbar-login">
                <FontAwesomeIcon icon={faVideo} style={{ color: "#a43f3fff", }} size="3x" />
            </nav>


            <div className="login-card">
                <div className="login-card-innerdiv">
                    <h1 className="login-title">Sign In</h1>

                    <div className="input-fields">
                        <input className="login-email" name="login-email" type="email" placeholder="Email or Mobail Number" />
                        <input className="login-pass" name="login-pass" type="text" placeholder="Password" />
                        <button className="login-btn">Sign In</button>
                        <p className="or">OR</p>
                        <button className="login-code-btn">Use a Sign-In Code</button>
                        <a href="">Forgot Passwrod</a>
                    </div>

                    <div className="additional-login-info">
                        <div className="checkbox-reme-me">
                            <input
                                type="checkbox"
                                name="Remember me"
                                value="rememVal"
                                id="rememVal"
                            />
                            <label htmlFor="rememVal" style={{ "--size": "30px" }}>
                                <svg viewBox="0 0 50 50">
                                    <path d="M5 30 L 20 45 L 45 5"></path>
                                </svg>
                            </label>
                            <label className="label-2" htmlFor="rememVal">Remember Me</label>
                        </div>
                        <div className="new-signup">
                            <p>New To Streaming?</p>
                            <a href="">Sign up now</a>
                        </div>
                        <p className="discalmer">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login
