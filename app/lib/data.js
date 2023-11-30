import { Users } from "./models";
import { connectDb } from "./util";

export const fetchUsers = async (q, page)=>{

    const regex = new RegExp(q, "i")

    const ITEM_PER_PAGE = 10;

    try {
        connectDb();
        const users = await Users.find({username: { $regex: regex }}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE*(page-1));
        return users;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch users!");
    }
}