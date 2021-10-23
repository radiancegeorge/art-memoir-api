require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const { sequelize } = require("./models");
const posts = require("./routes/posts");
const admin = require("./routes/admin");
const erroHandler = require("./middleware/errorHandler");
const subscribeRoute = require("./routes/subscribe");
const contact = require("./routes/contact");
const nft = require("./routes/nft");
const carousel = require("./routes/carousel");
const app = express();
const port = process.env.port || 4000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/post", posts);
app.use("/carousel_store", carousel);
app.use("/covers", express.static(path.join(__dirname, "./uploads")));
app.use("/nftStore", express.static(path.join(__dirname, "./nftStore")));
app.use("/carousel", express.static(path.join(__dirname, "./carousel")));
app.use(
  "/announcement",
  express.static(path.join(__dirname, "./announcement"))
);
app.use("/admin", admin);
app.use("/subscribe", subscribeRoute);
app.use("/contact", contact);
app.use("/nft", nft);
app.use(
  "/mailassets",
  express.static(path.join(__dirname, "/public/mailassets"))
);
app.use(erroHandler);
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
});
