const expect = require("chai").expect;
const fetch = require('node-fetch');
const SET_ENV = require('dotenv').config(); // eslint-disable-line
const url = process.env.API_URL;
const TEXT_MESSAGE_TEXT = 'Test message from mocha';
const TEXT_MESSAGE_TEXT_UPDATED = 'Test message from mocha updated';
let TEST_MESSAGE = null;

describe("Message tester", () => {
  describe("Tries to fetch all messages", () => {
    it("Returns messages", (done) => {
      fetch(url  + 'messages')
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
  describe("Tries to create message", () => {
    it("Create message", (done) => {
      fetch(url  + 'message', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: TEXT_MESSAGE_TEXT,
          deleted: false
        })
      })
        .then((response) => {
          expect(response.status).to.equal(200);
          return response.json()
        })
        .then((response) => {
          expect(response.text).to.equal(TEXT_MESSAGE_TEXT);
          TEST_MESSAGE = response;
          done();
        });
    });
  });
  describe("Tries to update message", () => {
    it("Update message", (done) => {
      TEST_MESSAGE.text = TEXT_MESSAGE_TEXT_UPDATED;
      fetch(url  + 'message', {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(TEST_MESSAGE)
      })
        .then((response) => {
          expect(response.status).to.equal(200);
          return response.json()
        })
        .then((response) => {
          expect(response.text).to.equal(TEXT_MESSAGE_TEXT_UPDATED);
          done();
        });
    });
  });
  describe("Tries to delete message", () => {
    it("Update message", (done) => {
      TEST_MESSAGE.text = TEXT_MESSAGE_TEXT_UPDATED;
      fetch(url  + 'message', {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          _id: TEST_MESSAGE._id,
          deleted: !TEST_MESSAGE.deleted,
          forced: true
        })
      })
        .then((response) => {
          expect(response.status).to.equal(200);
          done();
        })
    });
  });
});