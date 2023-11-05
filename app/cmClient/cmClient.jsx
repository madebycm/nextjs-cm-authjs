"use client";

import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function CMClient(){
    
    const [somethingFromSession, setSomethingFromSession] = useState(null);

    useEffect(() => {
        const cm = async() => {
            const session = await getSession();
            console.log("Session from client", session);
            setSomethingFromSession(session.cmSession );
        }
        cm();
    }, []);

    return (<p>✅ Hello, from client (check client console). <span className="text-sm">Proof: {somethingFromSession}</span></p>)
}