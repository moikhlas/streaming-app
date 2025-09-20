import { useState, useEffect } from "react";
import "./login-intro.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Intro_Login_Page() {
    // Wilstore trinding movies here
    const [trindingMovies, setTrindingMovies] = useState();

    async function getTrendingMovies() {
        try {
            const response = await fetch("http://localhost:5000/api/trending-movies");
            if (!response.ok) throw new Error("Failed to fetch movies");
            return await response.json();
        } catch (err) {
            console.error(err);
            return [];
        }
    }

    useEffect(() => {
        getTrendingMovies()
            .then(movies => setTrindingMovies(movies))
            .catch(err => console.error(err));
    }, [])

    /*******************************************************************************/


    const [email, setEmail] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // prevent page reload

        if (!email.trim()) {
            alert("Please enter your email before continuing.");
            return;
        }

        try {
            const res = await fetch("http://localhost:5000/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            });

            // Check if the response was successful (status code 200-299)
            if (res.ok) {
                const data = await res.json();
                console.log("Response from server:", data);
                localStorage.setItem("userEmail", email);
                navigate('/signup/linksent');
            } else {
                // Handle non-successful responses
                const errorData = await res.json();
                alert(`Error: ${errorData.message || 'Something went wrong.'}`);
            }
        } catch (error) {
            // Handle network errors
            console.error("Network or fetch error:", error);
            alert("Could not connect to the server. Please try again later.");
        }
    };

    return (
        <main className="getting-started-page">
            <header>
                <nav className="navbar">
                    <div className="logo">
                        <FontAwesomeIcon icon={faVideo} style={{ color: "#ffffff", }} size="2x" />
                    </div>
                    <div className="sign-in">
                        <select name="lang" id="lang-options" className="lang-options">
                            <option value="english">English</option>
                            <option value="espanol">Espanol</option>
                        </select>
                        <button className="sign-in-btn">Sign In</button>
                    </div>
                </nav>

                <div className="header">
                    <div className="header-txt">
                        <h1 className="title-header">Unlimited movies, TV <br /> shows, and more</h1>
                        <p className="sub-title-header">Starts at $7.99. Cancel anytime.</p>
                        <p className="log-in-txt">Ready to watch? Enter your email to create or restart your membership.</p>
                    </div>
                    <form className="log-in-form" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            id="email-field-1"
                            className="input-field"
                            placeholder="Email"
                            value={email}
                            name="userEmail"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className="log-in-btn">
                            Get Started{" "}
                            <FontAwesomeIcon icon={faAngleRight} className="left-arrow-login" />
                        </button>

                    </form>
                </div>
            </header>

            <section className="section-1">
                <div className="latest-offer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="latest-offer-svg" viewBox="0 0 640 640"><path fill="#FFD43B" d="M256.5 37.6C265.8 29.8 279.5 30.1 288.4 38.5C300.7 50.1 311.7 62.9 322.3 75.9C335.8 92.4 352 114.2 367.6 140.1C372.8 133.3 377.6 127.3 381.8 122.2C382.9 120.9 384 119.5 385.1 118.1C393 108.3 402.8 96 415.9 96C429.3 96 438.7 107.9 446.7 118.1C448 119.8 449.3 121.4 450.6 122.9C460.9 135.3 474.6 153.2 488.3 175.3C515.5 219.2 543.9 281.7 543.9 351.9C543.9 475.6 443.6 575.9 319.9 575.9C196.2 575.9 96 475.7 96 352C96 260.9 137.1 182 176.5 127C196.4 99.3 216.2 77.1 231.1 61.9C239.3 53.5 247.6 45.2 256.6 37.7zM321.7 480C347 480 369.4 473 390.5 459C432.6 429.6 443.9 370.8 418.6 324.6C414.1 315.6 402.6 315 396.1 322.6L370.9 351.9C364.3 359.5 352.4 359.3 346.2 351.4C328.9 329.3 297.1 289 280.9 268.4C275.5 261.5 265.7 260.4 259.4 266.5C241.1 284.3 207.9 323.3 207.9 370.8C207.9 439.4 258.5 480 321.6 480z" /></svg>
                    <div className="latest-offer-info">
                        <div className="latest-offer-info-txt">
                            <h3>Movies you love for only $7.99.</h3>
                            <h4>Get our most affordable, ad-supported plan.</h4>
                        </div>
                        <button className="latest-offer-into-btn">Learn More</button>
                    </div>
                </div>

                <div className="trending-movies">
                    {trindingMovies && trindingMovies.map((movie, index) => (
                        <div className="movie-card-trending" key={movie.id}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.original_title}
                                className="trending-movie-img"
                            />
                            <h2 className="movie-trending-txt">{index + 1}</h2>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section-2">
                <h2 className="why-us-title">More Reasons to Join
                </h2>
                <div className="why-us-reasons">
                    <div className="why-us-reason-card why-us-reason-one">
                        <h3>Enjoy on your TV</h3>
                        <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    </div>
                    <div className="why-us-reason-card why-us-reason-2">
                        <h3>Download your shows to watch offline</h3>
                        <p>Save your favorites easily and always have something to watch.</p>
                    </div>
                    <div className="why-us-reason-card why-us-reason-3">
                        <h3>Watch everywhere</h3>
                        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div>
                    <div className="why-us-reason-card why-us-reason-4">
                        <h3>Create profiles for kids</h3>
                        <p>Send kids on adventures with their favorite characters in a space made just for them — free with your membership.</p>
                    </div>
                </div>
            </section>

            <section className="section-3">
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <form className="log-in-form-again">
                    <input type="email" id="email-field-2" className="input-field-again" placeholder="Email" />
                    <button onClick={(e) => {
                        e.preventDefault();
                        const inputValue = document.getElementById("email-field-2").value;
                        setEmail(inputValue);
                    }} type="submit" className="log-in-btn-again">Get Started <FontAwesomeIcon icon={faAngleRight} className="left-arrow-login-again" /></button>
                </form>

            </section>

            <footer className="footer">
                <div className="footer-content">
                    <div className="credits-section">
                        <h3 className="credits-title">Acknowledgments & Credits</h3>

                        <div className="credit-item">
                            <strong>Netflix:</strong> Design inspiration and UI/UX patterns adapted from Netflix's interface design principles. Netflix is a trademark of Netflix, Inc.
                        </div>

                        <div className="credit-item">
                            <strong>The Movie Database (TMDB):</strong> Movie data, images, and information provided by <a href="https://www.themoviedb.org/" target="_blank">The Movie Database</a>. This product uses the TMDB API but is not endorsed or certified by TMDB.
                        </div>

                        <div className="credit-item">
                            <strong>Font Awesome:</strong> Icons provided by <a href="https://fontawesome.com/" target="_blank">Font Awesome</a>. Font Awesome is licensed under the Font Awesome License.
                        </div>

                        <div className="credit-item">
                            <strong>Unsplash:</strong> High-quality images sourced from <a href="https://unsplash.com/" target="_blank">Unsplash</a>. Photos are provided by talented photographers and are free to use under the Unsplash License.
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; 2025 Your Website Name. This site is for educational/personal purposes.</p>
                        <div className="disclaimer">
                            This website is not affiliated with Netflix, Inc., The Movie Database, Font Awesome, or Unsplash.
                            All trademarks and copyrights belong to their respective owners.
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    )
}

export default Intro_Login_Page