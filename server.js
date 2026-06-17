import dotenv from "dotenv"
import app from "./backend/app.js"
import connectToDb from "./backend/config/db.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

connectToDb((err) => {
    if(!err){
        app.listen(PORT, () => {
            console.log(`Server is listening at port ${PORT}.....`);
        })
    }
    else{
        process.exit(1);
    }
})