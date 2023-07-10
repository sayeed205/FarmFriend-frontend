"use client";

export default async function LocalStorage() {
    // check token in local storage
    // if token is present then send it to server to whoami route
    // if token is not present then redirect to login page
    // if token expired then redirect to login page

    const token = localStorage.getItem("token");
    if (token) {
        // send token to server
        const res = await fetch("/api/whoami", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token }),
        });
        if (res.ok) {
            // if token is valid then redirect to home page
            const data = await res.json();
            if (data.statusCode === 401) {
                // if token is expired then redirect to login page
                window.location.href = "/";
            }
            // if token is valid then redirect to home page
            window.location.href = "/";
        }
    } else {
        // if token is not present then redirect to login page
        window.location.href = "/";
    }

    return <div></div>;
}
