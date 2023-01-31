const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello welcome to node world");
  } else if (req.url === "/about") {
    res.end("This is home page");
  } else {
    res.end(`
    <h1>Opps</h1>
    <a href='/'>go home</a>
`);
  }
});

server.listen(5000);
