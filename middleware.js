import { getToken } from "next-auth/jwt";
export async function middleware(req, res) {
    if (req.nextUrl.pathname.startsWith("/cm")) {
        const token = await getToken({ req });
        console.log("\n\n=====\nHi, from middleware with JWT-token:", token, "\n=====\n\n");
    }
}