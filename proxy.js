import http from "http";
import httpProxy from "http-proxy";

const TARGET = "http://YOUR_PUBLIC_IP:80"; // your Pi public IP

const proxy = httpProxy.createProxyServer({
  target: TARGET,
  changeOrigin: true,
  xfwd: true
});

const server = http.createServer((req, res) => {
  proxy.web(req, res, err => {
    res.writeHead(502, { "Content-Type": "text/plain" });
    res.end("Bad gateway");
  });
});

const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
  console.log(`Proxy listening on port ${PORT}`);
});
