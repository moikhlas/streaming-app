import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import bcrypt from "bcrypt";
import { google } from "googleapis";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors())
app.use(express.json({
    origin: 'http://localhost:5173'
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.send("Hello " + PORT)
})

//Connects to Data Base 
mongoose.connect(process.env.DBK, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected!"))
    .catch(err => console.error("MongoDB connection error:", err));


// Gets trending movies 
app.get("/api/trending-movies", async (req, res) => {
    try {
        const response = await fetch(
            "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
            {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${process.env.API_TMDB}`,
                },
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        res.json(data.results.slice(0, 10));
    } catch (error) {
        console.error("Error fetching movies:", error);
        res.status(500).json({ error: "Failed to fetch movies" });
    }
});

// Logic fro getting Email and sending Varification Code

//------------------Scheme----------------
const varificationSchema = mongoose.Schema({
    email: { type: String, required: true },
    code: { type: String, required: true },
    code_expires: { type: Number, required: true }
})

const Varification = mongoose.model("Varification", varificationSchema);

// -----------Generating Varification Code -------------
const generateCode = () => {
    return Math.floor(100000 + Math.random() * process.env.VAR_END_LIMIT).toString();
}

// ----------- Creating Clint

const oAuthClient = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI)
oAuthClient.setCredentials({ refresh_token: process.env.REFRESH_TOKEN })


// ------- Sending-Varification Email --------

app.post("/api/signup", async (req, res) => {
    try {
        const { email } = req.body; // read from body

        if (!email) {
            return res.status(400).json({ error: "Email required" });
        }

        const varificationCode = generateCode();
        const hashedCode = await bcrypt.hash(varificationCode, 10)

        await Varification.deleteOne({ email });

        const varification = new Varification({
            email,
            code: hashedCode,
            code_expires: new Date(Date.now() + 5 * 60 * 1000)
        })
        await varification.save();

        res.json({message: "Varification Sent Successfully"})

        const accessToken = await oAuthClient.getAccessToken();

        const transporter = nodemailer.createTransport({ // Correct method: createTransport
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'mailtheguy.2020@gmail.com',
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: accessToken
            }
        });

        await transporter.sendMail({
            from: 'mailtheguy.2020@gmail.com',
            to: email,
            subject: "Your Varification Code for Streamers!",
            text: `Your Varification Code is ${varificationCode}. It will expire in 5 minutes.`
        });
        console.log("fuck")

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server error" });
    }

});

// ------- Conforming-Varification Code ------

app.post("/api/signup-vari", async (req, res) => {
    
})

app.listen(PORT, () => {
    console.log("Running on port " + PORT)
})