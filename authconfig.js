// export const authConfig = {
//   secret: "WSQjmg6P136nhssQqorY6oR9mqtJcQ9lexbk1BkQ",
//   providers: [],
//   pages: {
//     signIn: '/login',
//   },
//  callbacks: {
//     authorized({auth, request }) {
//       console.log(`auth is ${auth}`)
//       const isLoggedIn = auth?.user;
//       console.log(`afterAuth ${isLoggedIn}`) 
//       const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
//       if (isOnDashboard) {
//         if (isLoggedIn) return true;
//         return false;
//       } else if (isLoggedIn) {
//         return Response.redirect(new URL("/dashboard", request.nextUrl));
//       }
//       return true;
//     },
//   },
  
// };