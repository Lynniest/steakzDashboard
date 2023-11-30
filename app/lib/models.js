import mongoose from "mongoose";

// const clearenceLvl = {
//             adminstrator: 4,
//             executive: 3,
//             tatical: 2,
//             operational: 1,
//         }

const userShcema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique: true,
        min: 4,
        max: 64
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    img:{
        type: String,
    },
    role:{
        type: String,
        required: true,
    },
    roleCategory:{
        type: String, 
        required: true,
    },
    isActive:{
        type: Boolean,
        default: true,
    },
    phoneNo:{
        type: String,
    },
    address:{
        type: String
    }
},
{timestamps: true}
)

export const Users = mongoose.models.Users || mongoose.model("Users", userShcema)