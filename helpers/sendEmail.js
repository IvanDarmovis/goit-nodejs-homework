const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

const sendMail = async (data) => {
  try {
    await sgMail.send({ ...data, from: "ivan.darmovis1@gmail.com" });
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = sendMail;
