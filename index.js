const express = require("express");
const http = require("http");

const app = express();

app.get("/", (req, res) => {
  setTimer();
  res.send("This is polling current time....");
});

function setTimer() {
  setInterval(() => {
    const request = http.request("http://localhost:4000", (res) => {});
    request.end();
  }, 1000);
}

app.listen(5000, () => {
  console.log("App listening on port 5000");
});
