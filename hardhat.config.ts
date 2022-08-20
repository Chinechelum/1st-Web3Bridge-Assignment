import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.9",

  networks: {
    hardhat: {
      forking: {
        url: "https://mainnet.infura.io/v3/04adc6d97b3143c0b52379b4659dbbe2", //blockGasLimit: 200000000000, gasPrice: 10000000000,
      },
    },
    ropsten: {
      url: process.env.ROPSTEN_URL,
      //@ts-ignore
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};

export default config;

// networks: {
// hardhat: {
// forking: {
// url: "https://ropsten.infura.io/v3/ae1851e3cab540f5b666d1487751e20c",
// },
// },
// },