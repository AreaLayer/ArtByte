const {
  TREASURY_ADDRESS,
  AUCTION,
  MARKETPLACE,
  BUNDLE_MARKETPLACE
} = require('./constants');

async function main() {
  const NFTTradable = await ethers.getContractFactory('RSKNFTTradable');
  const nft = await NFTTradable.deploy(
    'Artion',
    'ART',
    AUCTION,
    MARKETPLACE,
    BUNDLE_MARKETPLACE,
    '10000000000000000000',
    TREASURY_ADDRESS
  );
  await nft.deployed();
  console.log('RSKNFTTradable deployed to:', nft.address);

  const NFTTradablePrivate = await ethers.getContractFactory(
    'RSKNFTTradablePrivate'
  );
  const nftPrivate = await NFTTradablePrivate.deploy(
    'IArtion',
    'IART',
    AUCTION,
    MARKETPLACE,
    BUNDLE_MARKETPLACE,
    '10000000000000000000',
    TREASURY_ADDRESS
  );
  await nftPrivate.deployed();
  console.log('RSKNFTTradablePrivate deployed to:', nftPrivate.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
