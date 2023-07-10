import Fetcher from "@/hooks/Fetcher";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const { email, password } = await req.json();

    const data = await Fetcher("/api/customer/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: JSON.stringify({ email, password }),
    });
    return new Response(JSON.stringify(data.data), {
        status: data.status,
        headers: {
            "Content-Type": "application/json",
        },
    });
}
