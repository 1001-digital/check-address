require('@nomiclabs/hardhat-etherscan')
require('@nomiclabs/hardhat-waffle')
require('hardhat-gas-reporter')
require('dotenv').config()

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks: {
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  mocha: {
    timeout: 10000,
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 45,
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    excludeContracts: ['DummyContract', 'OnlyExternal', 'CallerContract'],
  },
};
