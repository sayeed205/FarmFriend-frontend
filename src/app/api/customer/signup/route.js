export function POST (req, res) {
    console.log(req.body);
    const data = fetch("http://localhost:5000/api/customer/signup",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
    })
    .then(res => res.json())
    .then(console.log).catch(console.error);
}