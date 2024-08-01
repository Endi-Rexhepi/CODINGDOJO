const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3000;

const createUser = () => {
    return {
        _id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
};

const createCompany = () => {
    return {
        _id: faker.string.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    };
};

app.get('/api/users/new', (req, res) => {
    const user = createUser();
    res.json(user);
});

app.get('/api/companies/new', (req, res) => {
    const company = createCompany();
    res.json(company);
});

app.get('/api/user/company', (req, res) => {
    const user = createUser();
    const company = createCompany();
    res.json({ user, company });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
