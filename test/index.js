const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const app = require("../app");
const fs = require("fs-extra");

chai.use(chaiHttp);

describe("API ENDPOINT TESTING", () => {
  it("GET Landing Page", (done) => {
    chai
      .request(app)
      .get("/api/v1/member/landing-page")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("category");
        expect(res.body.category).to.have.an("array");
        done();
      });
  });

  it("GET Detail Page", (done) => {
    chai
      .request(app)
      .get("/api/v1/member/detail-page/5e96cbe292b97300fc902223")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("imageId");
        expect(res.body.imageId).to.have.an("array");
        expect(res.body).to.have.property("_id");
        expect(res.body).to.have.property("title");
        expect(res.body).to.have.property("description");
        expect(res.body).to.have.property("__v");
        expect(res.body).to.have.property("bank");
        expect(res.body.bank).to.have.an("array");
        expect(res.body).to.have.property("testimonial");
        expect(res.body.testimonial).to.have.an("object");
        done();
      });
  });

  it("POST Dues Page", (done) => {
    const image = __dirname + "/buktibayar.jpeg";
    const dataSample = {
      image,
      idItem: "5e96cbe292b97300fc902223",
      duesStartDate: "9-4-2022",
      firstName: "elfin",
      lastName: "sanjaya",
      email: "elfinsanjaya12@gmail.com",
      phoneNumber: "0815008899",
      accountHolder: "elfin",
      bankFrom: "BCA",
    };
    chai
      .request(app)
      .post("/api/v1/member/dues-page")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .field("idItem", dataSample.idItem)
      .field("duesStartDate", dataSample.duesStartDate)
      .field("firstName", dataSample.firstName)
      .field("lastName", dataSample.lastName)
      .field("email", dataSample.email)
      .field("phoneNumber", dataSample.phoneNumber)
      .field("accountHolder", dataSample.accountHolder)
      .field("bankFrom", dataSample.bankFrom)
      .attach("image", fs.readFileSync(dataSample.image), "buktibayar.jpeg")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(201);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("message");
        expect(res.body.message).to.equal("Success Dues");
        expect(res.body).to.have.property("dues");
        expect(res.body.dues).to.have.all.keys(
          "payments",
          "_id",
          "invoice",
          "duesStartDate",
          "total",
          "itemId",
          "memberId",
          "__v"
        );
        expect(res.body.dues.payments).to.have.all.keys(
          "status",
          "proofPayment",
          "bankFrom",
          "accountHolder"
        );
        expect(res.body.dues.itemId).to.have.all.keys(
          "_id",
          "title"
        );
        done();
      });
  });
});
