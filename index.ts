const express = require("express");
import axios from "axios";
import { Request, Response } from "express";
const app = express();
const PORT = 8000;

app.get("/health", (req: Request, res: Response) =>
  res.send("server is running")
);

app.get("/zipcode/:countryCode/:zipCode", (req: Request, res: Response) => {
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

module.exports = app;
