const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.json({
    message: "API",
  });
});

const users = [];
const companies = [];

class User {
  constructor() {
    this._id = faker.random.uuid();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

class Company {
  constructor() {
    this._id = faker.random.uuid();
    this.name = faker.company.companyName();
    this.address = {
      street: faker.address.streetName(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    }
  }
}

app.get("/api/user/new", (req, res) => {
  const newUser = new User();
  users.push(newUser);
  console.log('NewUser', newUser);
  res.json({ status: "ok" });
});

app.get("/api/company/new", (req, res) => {
  const newCompany = new Company();
  companies.push(newCompany);
  console.log('NewCompany', newCompany);
  res.json({ status: "ok" });
});

app.get("/api/user/company", (req, res) => {
  const newCompany = new Company();
  companies.push(newCompany);
  const newUser = new User();
  users.push(newUser);
  res.json({ status: "ok" });
});

app.get("/api/users", (req, res) => {
  console.log(users)
  res.json(users);
});

app.get("/api/companies", (req, res) => {
  console.log(companies)
  res.json(companies);
});

app.get("/api/users/:id", (req, res) => {
  console.log(req.params.id);
  res.json(users[req.params.id]);
});

const server = app.listen(port, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);