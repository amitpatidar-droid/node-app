const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern DevOps Dashboard</title>

    <style>

      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Segoe UI', sans-serif;
      }

      body{
        background:#0f172a;
        color:white;
        min-height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        overflow:hidden;
      }

      .background{
        position:absolute;
        width:100%;
        height:100%;
        overflow:hidden;
      }

      .circle{
        position:absolute;
        border-radius:50%;
        background:rgba(255,255,255,0.08);
        animation: float 10s infinite linear;
      }

      .circle:nth-child(1){
        width:200px;
        height:200px;
        top:10%;
        left:10%;
      }

      .circle:nth-child(2){
        width:300px;
        height:300px;
        bottom:5%;
        right:10%;
      }

      .circle:nth-child(3){
        width:150px;
        height:150px;
        bottom:20%;
        left:30%;
      }

      @keyframes float{
        0%{
          transform:translateY(0px);
        }
        50%{
          transform:translateY(-20px);
        }
        100%{
          transform:translateY(0px);
        }
      }

      .container{
        position:relative;
        z-index:1;
        width:90%;
        max-width:1000px;
        padding:40px;
        background:rgba(255,255,255,0.05);
        border:1px solid rgba(255,255,255,0.1);
        backdrop-filter:blur(12px);
        border-radius:25px;
        text-align:center;
        box-shadow:0 15px 40px rgba(0,0,0,0.4);
      }

      h1{
        font-size:55px;
        margin-bottom:20px;
        color:#38bdf8;
      }

      .subtitle{
        font-size:22px;
        margin-bottom:35px;
        color:#cbd5e1;
      }

      .status{
        display:inline-block;
        padding:12px 25px;
        background:#22c55e;
        border-radius:30px;
        font-weight:bold;
        margin-bottom:40px;
        color:black;
      }

      .grid{
        display:grid;
        grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
        gap:25px;
      }

      .card{
        background:#111827;
        padding:25px;
        border-radius:18px;
        transition:0.3s ease;
        border:1px solid rgba(255,255,255,0.05);
      }

      .card:hover{
        transform:translateY(-10px) scale(1.03);
        border-color:#38bdf8;
      }

      .icon{
        font-size:45px;
        margin-bottom:15px;
      }

      .card h2{
        margin-bottom:12px;
        color:#38bdf8;
      }

      .card p{
        color:#cbd5e1;
        line-height:1.5;
      }

      footer{
        margin-top:40px;
        color:#94a3b8;
        font-size:15px;
      }

    </style>
  </head>

  <body>

    <div class="background">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>

    <div class="container">

      <h1>🚀 DevOps Dashboard</h1>

      <div class="subtitle">
        CI/CD Pipeline Deployment Successful
      </div>

      <div class="status">
        ✅ LIVE ON AWS ECS Container app service
      </div>

      <div class="grid">

        <div class="card">
          <div class="icon">☁️</div>
          <h2>AWS Cloud</h2>
          <p>
            Infrastructure deployed on Amazon EC2 using Terraform.
          </p>
        </div>

        <div class="card">
          <div class="icon">⚙️</div>
          <h2>GitHub Actions</h2>
          <p>
            Automated CI/CD deployment pipeline running successfully.
          </p>
        </div>

        <div class="card">
          <div class="icon">🟢</div>
          <h2>NodeJS App</h2>
          <p>
            Modern Express application running on port 3000.
          </p>
        </div>

        <div class="card">
          <div class="icon">🔥</div>
          <h2>PM2 Manager</h2>
          <p>
            Application monitored and managed using PM2 process manager.
          </p>
        </div>

      </div>

      <footer>
        Created by devops | DevOps Engineer 🚀
      </footer>

    </div>

  </body>
  </html>
  `);
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
