const hre = require("hardhat");
const fs = require("fs-extra");

async function main() {
  const YouTube = await hre.ethers.getContractFactory("YouTube");
  const youTube = await YouTube.deploy();

  await youTube.deployed();

  console.log("YouTube deployed to:", youTube.address);

  // We also save the contract's artifacts and address in the frontend directory
  // so that we can use it in our frontend
  fs.writeFileSync(
    "config.js",
    `
    export const contractAddress = "${youTube.address}";
    export const ownerAddress = "${youTube.signer.address}";
    `
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
