import { revalidatePath, } from "next/cache";
import { Users } from "./models";
import { connectDb } from "./util";
import bcrypt from "bcrypt"
// import { signIn} from "../../auth";
import { redirect, useRouter } from "next/navigation";
import Dashboard from "../dashboard/page";


export const addUser = async(formData) =>{
    "use server";

    const { username,email, img, password, role, roleCategory,isActive, phoneNo, address, } = Object.fromEntries(formData);
    try {
        connectDb();

        const salt = await bcrypt.genSalt(10);
        const hashedPsw = await bcrypt.hash(password, salt)
        const newUser = Users({
            username,
            email,
            img,
            password: hashedPsw,
            role,
            roleCategory,
            isActive,
            phoneNo,
            address,

        });
        await newUser.save();
        
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
    
    revalidatePath("/dashboard/users")
}

// export const authenticate = async (formData) => {
//     "use server"
//     const {username, password} = Object.fromEntries(formData);
//     try {
//         await signIn("credentials", {username, password});
//     } catch (error) {
//         return "Wrong Credentials!";
//     }
// }

// export const authenticateUser = async() =>{}


export const authenticateUser = async (formData) => {
    "use server";

    const {username, password} = Object.fromEntries(formData);
    try {
        connectDb();
        const user = await Users.findOne({username: username})
        if (!user) throw new Error ("Wrong Username!");
        else {
            console.log(user.username);
        }
        const  isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) throw new Error ("Wrong Password!");
        else{
            console.log(`Password: ${user.password}`)
        }
        return <Dashboard/>;
    } catch (error) {
        console.log(error);
        throw new Error("Login Failed!");
    }
}