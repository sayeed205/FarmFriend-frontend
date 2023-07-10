import Fetcher from "@/hooks/Fetcher";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    const { email, password, confirmPassword } = await req.json();

    console.log(email, password);

    const data = await Fetcher("/api/customer/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: JSON.stringify({ email, password, confirmPassword }),
    });
    return new Response(JSON.stringify(data.data), {
        status: data.status,
        headers: {
            "Content-Type": "application/json",
        },
    });
}
