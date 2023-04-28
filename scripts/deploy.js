// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
require('dotenv').config()

async function main() {
  
  const flashloan = await hre.ethers.getContractFactory("FlashoanExecutor");
  const Flashloan = await flashloan.deploy('0x7A81e50E0Ad45B31cC8E54A55095714F13a0c74e','0x5e94B61BCa112683D18d5Ed27CebB16566E6d5ba', '0xbe02727047fADd7fe434E093e001745B42C5F49B');
  await Flashloan.deployed();
  console.log("flashloan Contract deployed to address:", Flashloan.address);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
