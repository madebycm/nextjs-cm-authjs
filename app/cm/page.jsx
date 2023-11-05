"use server";

import { getServerSession } from "next-auth";
import CMClient from "@/app/cmClient/cmClient.jsx";
import { authOptions } from "@/app/api/auth/[...nextauth]/route.jsx";


export default async function Cm() {
    const session = await getServerSession(authOptions);
    console.log(session);
    return (
        <div className="p-10">
            <h1>nextjs-cm-authjs</h1>
            <p className="mt-5">✅ Hello, from the server (check server console)</p>
            <hr />
            <CMClient />
        </div>
    )
}