require("dotenv").config();

const dev = {
  app: {
    port: process.env.PORT || 4000,
  },
  db: {
    url: process.env.URL || "mongodb://localhost:27017/backEndRestAPI",
  },
};

module.exports = dev;
