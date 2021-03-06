require("dotenv").config();
const { email, pass } = process.env;
const nodemailer = require("nodemailer");
const defaultData = (data) => {
  return `
        <p>from: ${data.email}</p>
          <p> message: ${data.message}</p>
        <p> message: ${data.name}</p>
      `;
};
const sendMail = async ({ data, to = [] }) => {
  const transport = nodemailer.createTransport({
    host: "artmemoir.org",
    port: 465,
    secure: true,
    auth: {
      user: email,
      pass,
    },
  });
  console.log(to, "the address that should work");
  try {
    const send = await transport.sendMail({
      html: data.name ? defaultData(data) : data,
      to: to.length ? to : "admin@artmemoir.org",
      from: `ArtMemoir <${email}>`,
      subject: data.title || "ArtMemoir",
    });
    console.log(send);
    if (send) return send;
    throw "sending message failed!!";
  } catch (error) {
    console.log(error);
    // throw "Error sending mail";
  }
};

module.exports = sendMail;
