import connection from "../../database";
import { Router } from "express";
const router = Router();    

router.post("/register-client", async (req, res) => { 
    const { full_name, email_address, phone_number, age, gender, address, national_id, next_of_kin_contact,  medical_history,  current_medication, marital_status,   occupation, addmission_date } = req.body;
    console.log(req.body);

        try{
            const query = `INSERT INTO patients (full_name, email_address, phone_number, age,gender, address, national_id, next_of_kin_contact,  medical_history,  current_medication, marital_status,   occupation, addmission_date) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`;

            connection.query(query, [full_name, email_address, phone_number, age,gender, address, national_id, next_of_kin_contact,  medical_history,  current_medication, marital_status,  occupation, addmission_date], (err, result) => {
            if (err) { 
                        console.error("Error inserting data: ", err);
                        return res.status(500).json({ message: "Internal server error" });
                    }
                    console.log("Data inserted successfully: ", result);
                    if (result.affectedRows === 0) {
                        return res.status(400).json({ message: "Failed to register patient" });                                 
                    }
                    return res.status(200).json({ message: "Patient registered successfully" });
        })
        }catch(err){
        return res.status(500).json({ message: "Internal server error" });
      }  
    
 });


 export default router;