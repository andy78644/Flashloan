require("@nomicfoundation/hardhat-toolbox");

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const { API_URL, PRIVATE_KEY } = process.env;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
        url: API_URL,
        accounts: [`0x${PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: "R3KQG6PIAZZGKECTTNNYKHCZFFD48ZHIFU"
  },
};
