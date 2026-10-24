
const http = require("http");

const PORT = 3000;

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My CI/CD App</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      background: #f3f6fb;
      color: #1e293b;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .card {
      background: white;
      max-width: 600px;
      width: 100%;
      padding: 45px 30px;
      border-radius: 18px;
      text-align: center;
      box-shadow: 0 10px 35px rgba(0, 0, 0, 0.08);
    }

    .icon {
      font-size: 55px;
      margin-bottom: 20px;
    }

    h1 {
      color: #2563eb;
      font-size: 32px;
      margin-bottom: 15px;
    }

    p {
      color: #64748b;
      line-height: 1.7;
      margin-bottom: 25px;
    }

    .status {
      display: inline-block;
      background: #dcfce7;
      color: #166534;
      padding: 10px 18px;
      border-radius: 30px;
      font-weight: bold;
      margin-bottom: 25px;
    }

    .footer {
      border-top: 1px solid #e2e8f0;
      padding-top: 20px;
      color: #64748b;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="icon">🚀</div>
    <h1>Task :2 Jenkins CI/CD Application</h1>
    <p>
      Welcome! This Node.js application is deployed
      on AWS EC2 using Docker and Jenkins.
    </p>

    <div class="status">● Application is Running</div>

    <div class="footer">
      Built with Node.js | Docker | Jenkins | AWS
      <br><br>
      Automated Build • Test • Deploy
    </div>
  </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8"
  });
  res.end(html);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`App running on port ${PORT}`);
});

