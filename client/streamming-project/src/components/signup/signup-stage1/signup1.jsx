import "./signup1.css"
import { useState, useEffect, } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";


function Sending_Varification_Code() {

    const [email, setEmail] = useState();
    const {code, setCode} = useState()

    const navigate = useNavigate();

    useEffect(() => {
        const savedEmail = localStorage.getItem("userEmail");
        if (savedEmail) {
            setEmail(savedEmail);
            console.log("Your email is " + savedEmail);
        }
    }, []);

    const sendVarificationCode = () => {

    }

    return (
        <div className="linkroute">
            <nav className="navbar-signup">
                <FontAwesomeIcon icon={faVideo} style={{ color: "#a43f3fff", }} size="3x" />
                <a href="/login" className="signin-btn">Sign In</a>
            </nav>
            <div className="sitting-up-box">
                <img className="devices" alt="CS" src="https://occ-0-8267-56.1.nflxso.net/dnm/api/v6/nZVnzNNIegknNmej1Y3hGtfUZfU/AAAAAYL3Poat96BIA7iKG0irg4MM5cXH4o6cb46c2ci_jINem1kWl-CbgntjgPFQVw.png?r=bff"
                    width="260"
                    height="62"
                    style={{ display: "block", maxWidth: "100%", "height": "auto" }}></img>
                <div className="sendlink-txt">
                    <p>Step <b>1</b> of <b>5</b></p>
                    <h2>Starting setting up your <br /> account</h2>
                    <h3>We'll send a varification code to <b>{email}</b> <br></br> Please conform:</h3>
                </div>
                <form className="Varifi-user-form">
                    <input
                        type="text"
                        className="input-field"
                        placeholder=""
                        value={code}
                        name="varificationCode"
                        onChange={e => setCode(e)}
                        required
                        maxLength={10}
                    />
                    <button className="send-link-btn" onClick={() => sendVarificationCode()}>Send Link</button>

                </form>
            </div>
        </div>
    );
}

export default Sending_Varification_Code
