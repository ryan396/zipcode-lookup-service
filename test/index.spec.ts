import { Response } from "express";
const supertest = require("supertest");
const app = require("../index");

describe("health check", () => {
  it("responds with text", function (done) {
    supertest(app)
      .get("/health")
      .expect("server is running")
      .end(function (err: Error, res: Response) {
        if (err) {
          done(err);
        } else done();
      });
  });
});

const expectedSearchResult =
  '{"post code":"55417","country":"United States","country abbreviation":"US","places":[{"place name":"Minneapolis","longitude":"-93.2361","state":"Minnesota","state abbreviation":"MN","latitude":"44.9054"}]}';

describe("zip code query for minneapolis", () => {
  it("responds with text", function (done) {
    supertest(app)
      .get(`/zipcode/us/55417`)
      .expect(expectedSearchResult)
      .end(function (err: Error, res: Response) {
        if (err) {
          done(err);
        } else done();
      });
  });
});
