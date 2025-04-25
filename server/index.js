import express from 'express';
import patientReg from './src/routes/Patients/patient.route';

const app = express();

const PORT = process.env.PORT || 3000;

const corsPolicy = {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsPolicy));


app.use("patient", patientReg);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

