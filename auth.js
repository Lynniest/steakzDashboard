import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { authConfig } from "./authconfig"
import { connectDb } from "./app/lib/util"
import { Users } from "./app/lib/models"
import bcrypt from "bcrypt"

 
// const login = async (credentials) => {
//     try {
//         connectDb();
//         const user = await Users.findOne({username: credentials.username})

//         if (!user) throw new Error ("Wrong Username!");
//         else {
//             console.log(user.username);
//         }
//         const  isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
//         if (!isPasswordCorrect) throw new Error ("Wrong Password!");
//         else{
//             console.log(`Password: ${user.password}`)
//         }
//         return user;
//     } catch (error) {
//         console.log(error);
//         throw new Error("Login Failed!");
//     }
// }



export const{signIn, singOut, auth} = NextAuth({
     ...authConfig,
    providers: [

    CredentialsProvider({
      async authorize(credentials) {
        try {
            const user = await login(credentials);
            console.log(`Logging in ${user}`)
            return user;
        } catch (error) {
            console.log(error)
            // throw new Error("Smth Went Wrong!");
            return "Smth Went Wrong";
        }
      },
    }),
  ],
   callbacks: {
    authorized({auth, request }) {
      console.log(`auth is ${auth}`)
      const isLoggedIn = auth?.user;
      console.log(`afterAuth ${isLoggedIn}`) 
      const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", request.nextUrl));
      }
      return true;
    },
  },
  
 
//   callbacks: {
//     async jwt({token, user}){
//         if(user){
//             token.username = user.username;
//             token.img = user.img;
//             token.role = user.role;
//             token.roleCategory = user.roleCategory;
//         }
//         return token;
//     },
//     async session({session, token}){
//         if(token){
//             session.user.username = token.username;
//             session.user.img = token.img;
//             session.user.role = token.role;
//             session.user.roleCategory = token.roleCategory;
//         }
//         return session;
//     }
//   }
})