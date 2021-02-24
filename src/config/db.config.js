require("dotenv").config();

module.exports = {
    development: {
        url: process.env.DEV_DATABASE_URL,
        dialect: "postgres",
        logging: false,
    },
    test: {
        url: process.env.TEST_DATABASE_URL,
        dialect: "postgres",
        logging: false,
    },
    production: {
        url: process.env.DATABASE_URL,
        dialect: "postgres",
        logging: false,
        dialectOptions: {
            ssl: { require: true, rejectUnauthorized: false },
        },
        pool: {
            max: 10,
            min: 0,
            idle: 20000,
        },
    },
};