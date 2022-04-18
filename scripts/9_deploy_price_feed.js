const {
  RSK SMART BTCOIN_ADDRESS_REGISTRY,
  RSK SMART BITCOIN_MAINNET,
  RSK SMART BITCOIN_TESTNET
} = require('./constants');

async function main() {
  const Contract = await ethers.getContractFactory('FantomPriceFeed');
  const contract = await Contract.deploy(
    RSK SMART BITCOIN_ADDRESS_REGISTRY,
    RSK SMART BITCOIN_MAINNET
  );

  await contract.deployed();

  console.log('RBTCPriceFeed deployed to', contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
