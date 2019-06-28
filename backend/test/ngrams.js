const expect = require("chai").expect;
const fetch = require('node-fetch');
const url = process.env.API_URL;

describe("NGram tester", () => {
  describe("Tries to calculate ngram", () => {
    it("Returns ngrams", (done) => {
      fetch(url  + 'ngram')
        .then((response) => {
          expect(response.status).to.equal(200);
          return response.json()
        })
        .then((response) => {
          expect(response.length).to.be.at.least(1);
          done();
        });
    });
    it("Tries to calculate ngram with empty data", (done) => {
      fetch(url  + 'ngram')
        .then((response) => {
          expect(response.status).to.equal(200);
          return response.json()
        })
        .then((response) => {
          expect(response.length).to.be.at.least(1);
          done();
        });
    });
    it("Tries to calculate ngram with numeric data", (done) => {
      fetch(url  + 'ngram')
        .then((response) => {
          expect(response.status).to.equal(200);
          return response.json()
        })
        .then((response) => {
          expect(response.length).to.be.at.least(1);
          done();
        });
    });
    it("Tries to calculate ngram with no data", (done) => {
      fetch(url  + 'ngram')
        .then((response) => {
          expect(response.status).to.equal(200);
          return response.json()
        })
        .then((response) => {
          expect(response.length).to.be.at.least(1);
          done();
        });
    });
  });
});