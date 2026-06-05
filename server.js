const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>NodeJS App Deployed using GitHub Actions + Terraform</h1>
    <p>CI/CD Pipeline Working Successfully Created by DevOps Team🚀</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
