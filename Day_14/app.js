const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.end(`
            <h1>Good Morning Estif!</h1>
            <p>Learning Node.js HTTP Module</p>
            `);
    } else if (req.url === "/about"){
        res.setHeader("Content-Type", "text/plain")
        res.end("about page");
    } else if (req.url === "/contact") {
        res.setHeader("Content-Type", "text/plain")
        res.end("Contact Us")
    } else if (req.url === "/skills") {
        res.setHeader("Content-Type", "text/plain")
        res.end("HTML CSS JavaScript React Node.js")
    } else {
        res.statusCode = 404
        res.end("404 page not found")
    };

    console.log(req.url)
});

server.listen(3000, () => {
    console.log("server running...")
});