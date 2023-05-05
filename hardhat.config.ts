import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
const secret = require('./.secret.json');
const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.15",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  networks: {
    hardhat: {},
    ganache: {
      url: "http://127.0.0.1:8545",
      allowUnlimitedContractSize: true,
      gas: 2100000,
      gasPrice: 8000000000
    },

    sepolia: {
      url: `https://sepolia.infura.io/v3/${secret.projectId}`,
      accounts: {
        mnemonic: secret.accountPrivateKey,
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20,
      },
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${secret.projectId}`,
      accounts: {
        mnemonic: secret.accountPrivateKey,
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20,
      },
    }
  },
  etherscan: {
    apiKey: secret.etherscan,
  },
};

export default config;
