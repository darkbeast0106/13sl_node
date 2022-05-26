const { faker } = require('@faker-js/faker');
module.exports = {
    up: (queryInterface, Sequelize) => {
        const dogs = [];
        for (let i = 0; i < 5; i++) {
            const dog = {
                nev: faker.name.firstName(),
                eletkor: faker.datatype.number({min: 1, max:10}),
                fajta: faker.animal.dog(),
                gazda_neve: faker.name.findName(),
                createdAt: new Date(),
                updatedAt: new Date()
            };
            dogs.push(dog);
        }
        return queryInterface.bulkInsert('Dogs', dogs);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Dogs', null, {});
    }
};