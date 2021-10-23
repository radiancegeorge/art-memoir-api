const asyncHandler = require("express-async-handler");
const { saveNft, deleteNft, getNfts } = require("../utils/saveNft");

const nftUploads = asyncHandler(async (req, res, next) => {
  const { file, body } = req;
  console.log(file);
  const isSaved = await saveNft({
    ...body,
    image: `${process.env.server_url}nftStore/${file.filename}`,
  });
  if (isSaved) {
    res.status(200).json({ message: "Nft successfully uploaded" });
  } else {
    throw "error uploading Nft";
  }
});
const getNft = asyncHandler(async (req, res, next) => {
  const data = req.query;
  res.status(200).json(await getNfts(data));
});

const removeNft = asyncHandler(async (req, res, next) => {
  const { id } = req.body;
  await deleteNft(id);
  res.status(200).json({ message: "nft deleted successfully from store" });
});
module.exports = {
  nftUploads,
  getNft,
  removeNft,
};
