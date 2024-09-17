import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },

      httpHeaders: {
        'Access-Control-Allow-Origin': '*', // Allow all origins
      },
    },
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
  },
};

export default config;
