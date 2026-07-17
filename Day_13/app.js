const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.end(`
            <h1>Welcome Estif!</h1>
            <p>Learning Node.js HTTP Module</p>
            `);
    } else if (req.url === "/about"){
        res.end("about page");
    } else if (req.url === "/contact") {
        res.end("Contact Us")
    } else {
        res.statusCode = 404
        res.end("404 page not found")
    };

    console.log(req.url)
});

server.listen(3000, () => {
    console.log("server running...")
});