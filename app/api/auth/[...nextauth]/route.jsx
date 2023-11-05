import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

// export it so it can be used in app/cm/page.jsx
export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async session({ session }) {
            // you can do db stuff here
            session.cmSession = "schmession";
            session.cmTimestamp = Date.now();
            return session;
        },
        async jwt({ token }) {
            // call /api/auth/session to refresh this
            
            token.cmToken = "schmoken";
            token.cmTimestamp  = Date.now();
            return token;
        }
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }