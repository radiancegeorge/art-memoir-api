const { nftUploads, getNft, removeNft } = require("../controller/uploadNft");
const { nftStore } = require("../middleware/multer");

const nft = require("express").Router();

nft
  .route("/")
  .post(nftStore.single("image"), nftUploads)
  .get(getNft)
  .delete(removeNft);

module.exports = nft;
