const http = require("node:http");

function createServer() {
  return http.createServer((request, response) => {
    if (request.method === "GET" && request.url === "/health") {
      response.writeHead(200, { "content-type": "application/json" });
      response.end(JSON.stringify({ status: "ok" }));
      return;
    }

    response.writeHead(404, { "content-type": "application/json" });
    response.end(JSON.stringify({ error: "Not found" }));
  });
}

if (require.main === module) {
  const port = Number(process.env.PORT || 3000);
  const server = createServer();

  server.listen(port, () => {
    console.log(`API disponível em http://localhost:${port}`);
  });
}

module.exports = { createServer };
