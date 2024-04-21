const http = require("http");
const url = require("url");

const PORT = process.env || 8080;
// const pathName =

const server = http.createServer((req, res) => {});

server.listen(PORT, "127.0.0.10", () => {
  console.log(`Server is running on port:${PORT}`);
});
