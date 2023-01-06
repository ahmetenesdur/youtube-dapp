const hre = require("hardhat");

const contractAddress = "0xEaF66e3EcCEc6Ad5296d4B94D84F935DA0aBb85d";

async function main() {
  await hre.run("verify:verify", {
    address: contractAddress,
    constructorArguments: [],
  });

  console.log("Contract verified!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
