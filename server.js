const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>DevOps CI/CD Project</title>

    <style>
      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: Arial, sans-serif;
      }

      body{
        background: linear-gradient(135deg,#1e3c72,#2a5298);
        min-height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        color:white;
      }

      .container{
        width:90%;
        max-width:900px;
        background: rgba(255,255,255,0.1);
        backdrop-filter: blur(10px);
        padding:40px;
        border-radius:20px;
        box-shadow:0 10px 30px rgba(0,0,0,0.3);
        text-align:center;
      }

      h1{
        font-size:48px;
        margin-bottom:20px;
        color:#00ffcc;
      }

      h2{
        margin-bottom:15px;
        color:#ffd369;
      }

      p{
        font-size:18px;
        margin-bottom:15px;
        line-height:1.6;
      }

      .card-container{
        display:grid;
        grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
        gap:20px;
        margin-top:30px;
      }

      .card{
        background:white;
        color:#333;
        padding:25px;
        border-radius:15px;
        transition:0.3s;
      }

      .card:hover{
        transform:translateY(-10px);
      }

      .card h3{
        margin-bottom:10px;
        color:#2a5298;
      }

      .badge{
        display:inline-block;
        margin-top:20px;
        background:#00ffcc;
        color:black;
        padding:12px 20px;
        border-radius:30px;
        font-weight:bold;
      }

      footer{
        margin-top:30px;
        font-size:14px;
        color:#ddd;
      }

    </style>
  </head>

  <body>

    <div class="container">

      <h1>🚀 DevOps Project</h1>

      <h2>CI/CD Pipeline Successfully Running</h2>

      <p>
        This NodeJS application is deployed automatically using:
      </p>

      <div class="card-container">

        <div class="card">
          <h3>Terraform</h3>
          <p>Infrastructure provisioning on AWS using Infrastructure as Code.</p>
        </div>

        <div class="card">
          <h3>AWS EC2</h3>
          <p>Cloud server hosting the NodeJS application.</p>
        </div>

        <div class="card">
          <h3>GitHub Actions</h3>
          <p>Automated CI/CD deployment pipeline.</p>
        </div>

        <div class="card">
          <h3>PM2</h3>
          <p>Production process manager for NodeJS applications.</p>
        </div>

      </div>

      <div class="badge">
        ✅ Deployment Successful
      </div>

      <footer>
        Created by Amit Patidar | DevOps Engineer
      </footer>

    </div>

  </body>
  </html>
  `);
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
