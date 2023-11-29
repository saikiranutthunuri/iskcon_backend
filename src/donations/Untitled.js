const http = require("http");

const options = {
  "method": "POST",
  "hostname": "localhost",
  "port": "3000",
  "path": "/admin/donations/createDonation",
  "headers": {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "multipart/form-data; boundary=---011000010111000001101001",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzdHJpbmcyMiIsInVzZXJuYW1lIjoic3RyaW5nMjIiLCJ1c2VySWQiOiI1MjBlNjJmOC1jODY2LTQ3MGUtYWRlZC0wYjM3ODY3Mjg2MTMiLCJyb2xlIjpudWxsLCJpYXQiOjE3MDA3NTAxOTF9.CinV3WzPUmxoyJnU1kW2A2vpT_uYTwEWKzMm5KzEnhc"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write("-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"name\"\r\n\r\nHello\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"description\"\r\n\r\nHello\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"donationImage\"; filename=\"Aadharjpg.jpg\"\r\nContent-Type: image/jpeg\r\n\r\n\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"donationImageBanner\"; filename=\"Aadharjpg.jpg\"\r\nContent-Type: image/jpeg\r\n\r\n\r\n-----011000010111000001101001--\r\n");
req.end();