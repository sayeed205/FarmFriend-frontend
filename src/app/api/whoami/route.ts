import Fetcher from "@/hooks/Fetcher";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const { token } = await req.json();

    const data = await Fetcher("/api/whoami", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (data.status === 200) {
        return new Response(JSON.stringify(data.data), {
            status: data.status,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    return new Response(JSON.stringify(data.data), {});
}
