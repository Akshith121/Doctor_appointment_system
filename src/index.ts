import express from "express";
import cors from "cors";
import 'dotenv/config'
import { getDay, checkIfSunday } from "./middleware";

const app = express();
const PORT = 4000;

app.use(cors());

app.use(getDay);

//doctors listing
app.get('/doctors', (req, res) => {
    res.status(200).json({ list: "doctors" })
})

//doctor details
app.get('/doctor/details/:id', (req, res) => {
    res.status(200).json({ doctor: "name and all details" })
})

app.use(checkIfSunday);

//doctor availability details
app.get('/doctors/available', (req, res) => {
    
})

//appointment booking
app.post('/doctor/appointment/', (req, res) => {
    
})

//changing appointment booking
app.put('/doctor/appointment', (req, res) => {
    
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})