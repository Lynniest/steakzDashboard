import mongoose from "mongoose"

export const connectDb = async()=>{
    const connection = {};
    try {
        if (connection.isConnected) return;
        const db = await mongoose.connect("mongodb+srv://Lynn:cCmgrF4tt2RZ0w9A@cluster0.b9gjehw.mongodb.net/dashboard?retryWrites=true&w=majority");
        connection.isConnected = db.connections[0].readyState;
        
    } catch (error) {
        console.log(error);
    }
}

export const arrangeClearenceLvl = (cate_name) =>{
    if (cate_name==="adminstrator"){
        return 0.5;
    }
    else if (cate_name==="executive"){
        return 1;
    }
    else if (cate_name==="tactical"){
        return 2;
    }
    else if (cate_name==="operational"){
        return 3;
    }
    return Infinity;
}