import { Acc } from "../../../components/Components";

const NodeFs = () => (
  <pre className="text-sm">{`
davegray
const fs = require("fs");
const path = require("path");

// coba satu per satu syntax di bawah dengan mengomentari yang lainnya

fs.writeFile(path.join(__dirname, "newFile.txt"), "this is new file content", (err, data) => {
if (err) throw err;
console.log("Write file success");
});

fs.readFile(path.join(__dirname, "newFile.txt"), "utf-8", (err, data) => {
if (err) throw err;
console.log(data);
});

fs.appendFile(path.join(__dirname, "newAppend.txt"), "\nthis is append file", (err, data) => {
if (err) throw err;
console.log("Append file can create new file");
});

fs.appendFile(path.join(__dirname, "newAppend.txt"), "\nthis is append file addition", (err, data) => {
if (err) throw err;
console.log("Append file can update existing file");
});

fs.mkdir(path.join(__dirname, "newDir"), (err) => {
if (err) throw err;
console.log("Create directory success");
});

if (fs.existsSync(path.join(__dirname, "newDir"))) {
fs.rmdir(path.join(__dirname, "newDir"), (err) => {
    if (err) throw err;
    console.log("Remove directory success");
});
}

fs.unlinkSync(path.join(__dirname, "newFile.txt"));

if (fs.existsSync(path.join(__dirname, "newAppend.txt"))) fs.unlinkSync(path.join(__dirname, "newAppend.txt"));

// ------- file besar
const fs = require("fs");
const path = require("path");

const rs = fs.createReadStream(path.join(__dirname, "files", "fileBesar.txt"), { encoding: "utf-8" });
const ws = fs.createWriteStream(path.join(__dirname, "files", "fileBesarCopy.txt"));

// kedua cara di bawah hasilnya sama
// cara 1
// rs.on("data", (dataChunk) => {
//   ws.write(dataChunk);
// });

// cara 2
rs.pipe(ws);
          `}</pre>
);
const NodeHttp = () => (
  <pre className="text-sm">{`
http basic
const http = require("http");
const moment = require("moment");

http
.createServer((req, res) => {
    console.log(req.url);
    switch (req.url) {
    case "/":
        res.write("hello world");
        res.end();
        break;
    case "/page1":
        page1(res);
        break;
    default:
        errorPage(res);
    }
})
.listen(3000, () => console.log("Server running at http://127.0.0.1:3000"));

const page1 = (res) => {
res.statusCode = 200;
res.setHeader("Content-Type", "text/json");
res.write(
    JSON.stringify({
    nama: "ahmad",
    umur: 20,
    waktu: moment(),
    })
);
res.end();
};

const errorPage = (res) => {
res.statusCode = 404;
res.setHeader("Content-Type", "text/json");
res.write(
    JSON.stringify({
    nama: "failed",
    umur: "not found",
    waktu: moment(),
    })
);
res.end();
};


http davegray
const { logEvents } = require("./logEvents");
const EventEmitter = require("node:events");
const http = require("http");
const fs = require("fs");
const path = require("path");

const eventEmitter = new EventEmitter();
eventEmitter.on("log", (message, fileName) => {
logEvents(message, fileName);
});

const PORT = process.env.PORT || 3000;

const serveFile = (filePath, contentType, response) => {
try {
    const rawData = fs.readFileSync(filePath, !contentType.includes("image") ? "utf8" : "");
    const data = contentType === "application/json" ? JSON.parse(rawData) : rawData;
    response.writeHead(filePath.includes("404.html") ? 404 : 200, { "Content-Type": contentType });
    response.end(contentType === "application/json" ? JSON.stringify(data) : data);
} catch (error) {
    console.log(error);
    eventEmitter.emit("log", error.name + " : " + error.message, "errLog.txt");
    response.statusCode = 500;
    response.end();
}
};

const server = http.createServer((req, res) => {
console.log(req.url, req.method);
eventEmitter.emit("log", req.url + "\t" +req.method, "reqLog.txt");

// comment 1
// let filePath;
// if (req.url === "/" || req.url === "index.html") {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   filePath = path.join(__dirname, "views", "index.html");
//   fs.readFile(path, "utf-8", (err, data) => {
//     res.end(data);
//   });
// }

const extension = path.extname(req.url);
let contentType;
switch (extension) {
    case ".css":
    contentType = "text/css";
    break;
    case ".js":
    contentType = "text/javascript";
    break;
    case ".json":
    contentType = "text/json";
    break;
    case ".jpg":
    contentType = "image/jpeg";
    break;
    case ".png":
    contentType = "image/png";
    break;
    case ".txt":
    contentType = "text/plain";
    break;
    default:
    contentType = "text/html";
}

let filePath =
    contentType === "text/html" && req.url === "/"
    ? path.join(__dirname, "views", "index.html")
    : contentType === "text/html" && req.url.slice(-1) === "/"
    ? path.join(__dirname, "views", req.url, "index.html")
    : contentType === "text/html"
    ? path.join(__dirname, "views", req.url)
    : path.join(__dirname, req.url);

if (!extension && req.url.slice(-1) !== "/") filePath += ".html";

const fileExists = fs.existsSync(filePath);
if (fileExists) {
    serveFile(filePath, contentType, res);
} else {
    switch (path.parse(filePath).base) {
    case "old-page.html":
        res.writeHead(301, { Location: "/new-page.html" });
        res.end();
        break;
    case "www-page.html":
        res.writeHead(301, { Location: "/" });
        res.end();
        break;
    default:
        serveFile(path.join(__dirname, "views", "404.html"), "text/html", res);
    }
}
});

server.listen(PORT, () => console.log("Server running on port " + PORT));
          `}</pre>
);
const NodeOs = () => (
  <pre className="text-sm">{`
os davegray
// --- comment 1
console.log("hello world");
console.log(global);

// --- comment 2
const os = require("os");
const path = require("path");

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));

// --- comment 3
const { add, substract, multiply, divide } = require("./math");
console.log(add(6, 2));
console.log(substract(6, 2));
console.log(multiply(6, 2));
console.log(divide(6, 2));
          `}</pre>
);
const NodePath = () => (
  <pre className="text-sm">
    {`
node path
`}
  </pre>
);

const nodeModulesMenus = [
  { text: "fs", content: <NodeFs /> },
  { text: "http", content: <NodeHttp /> },
  { text: "os", content: <NodeOs /> },
  { text: "path", content: <NodePath /> },
];

export default function NodeModules() {
  return (
    <div className="border rounded p-2 mt-2">
      <Acc menus={nodeModulesMenus} />
    </div>
  );
}
