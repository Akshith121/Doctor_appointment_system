import express from "express";
import cors from "cors";
import 'dotenv/config'
import { getDay, checkIfSunday } from "./middleware";
import { PrismaClient } from '@prisma/client'
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;
const prisma = new PrismaClient()

app.use(bodyParser.json());
app.use(cors());

app.use(getDay);

app.post('/admin/doctor/post', async (req, res) => {
    const token = req.headers.authorization || "";
    if (token.split(" ")[1] !== process.env.Admin_token) {
        return res.status(401).json({msg: "Unauthorized to perform action"});
    }
    const doctor = req.body;
    const data = await prisma.doctor.create({
        data: doctor
    })
    return res.status(200).json({ data })
})

//doctors listing
app.get('/doctors', async (req, res) => {
    const doctors = await prisma.doctor.findMany();
    res.status(200).json({ doctors });
})

//doctor details
app.get('/doctor/details/:id', async (req, res) => {
    const doctor = await prisma.doctor.findFirst({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({ doctor })
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