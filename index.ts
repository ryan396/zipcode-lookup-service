import express from "express";
import axios from "axios";
const app = express();
const PORT = 8000;

app.get("/health", (req, res) => res.send("server is running"));

app.get("/zipcode/:countryCode/:zipCode", (req, res) => {
  const countryCode = req.params.countryCode;
  const zipCode = req.params.zipCode;
  axios
    .get(`http://api.zippopotam.us/${countryCode}/${zipCode}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      if (error.response) {
        res.sendStatus(error.response.status);
      } else {
        res.sendStatus(500);
      }
    });
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
