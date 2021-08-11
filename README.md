# Check Address Library
A Solidity library for the Ethereum blockchain to easily distinguish between smart contract and external addresses.

## Deployments
- Mainnet: *TODO*
- Ropsten: `0x87f11cba2Db0cB22b9679c14860bA5Be49Fd0717`
- Rinkeby: `0x029374cA831F9F4B04a0D896B8d00CcE05f30D8f`

## Installation

1. In your project run `npm install @1001/check-address`
2. Within your contract, import the library `import "@1001/check-address/contracts/CheckAddress.sol";`
3. In your code, you can check address types like so: 
   ```solidity
   address account = 0x1234567891011121314151617181920212223242
   if (CheckAddress.isExternal(account)) { 
     // ...
   }
   ```

## Local Development

To set up your environment run `npm install`.

Note: You can exchange `npm run` for `hh` if you have `hh` installed globally on your system.

- Run the test suite: `npm run test`
- Spin up a local development blockchain: `npm run node`
- Deploy the contract with `npm run deploy:localhost`

## Deployment

Deploy the project via `npm run deploy:{NETWORK}` with `NETWORK` being one of `localhost|rinkeby|ropsten|mainnet`.

## Thank You

If you have any **improvement suggestions**, **feedback** or **bug reports** please feel free add an issue, or reach out via Twitter [@jwahdatehagh](https://twitter.com/jwahdatehagh) or Email [jalil@1001.digital](jalil@1001.digital).
