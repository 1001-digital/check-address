# Check Address
A Solidity library for the Ethereum blockchain to easily distinguish between smart contract and external addresses.

***Warning:*** The checks in this library can be circumvented by calling from within a contract constructor. See the tests for a detailed attack example and check out [this discussion](https://ethereum.stackexchange.com/questions/15641/how-does-a-contract-find-out-if-another-address-is-a-contract) exploring the issue. 

Consider carefully whether this is acceptable in your use case.

## Installation

1. In your project run `npm install @1001-digital/check-address`
2. Within your contract, import the library `import "@1001-digital/check-address/contracts/CheckAddress.sol";`
3. In your code, you can check address types like so: 
   ```solidity
   address account = 0x1234567891011121314151617181920212223242
   if (CheckAddress.isExternal(account)) { 
     // ...
   }
   ```

*Note:* You will have to link the library when creating your contract during development:
```js
const CheckAddress = await ethers.getContractFactory('CheckAddress');
const library = await CheckAddress.deploy()

const MyContract = await ethers.getContractFactory('MyContract', {
  libraries: {
    CheckAddress: library.address,
  },
});
```

## Local Development

To set up your environment run `npm install`.

Note: You can exchange `npm run` for `hh` if you have `hh` installed globally on your system.

- Run the test suite: `npm run test`
- Spin up a local development blockchain: `npm run node`
- Deploy the contract with `npm run deploy:localhost`

## Deployment

Deploy the project via `npm run deploy:{NETWORK}` with `NETWORK` being one of `localhost|rinkeby|ropsten|mainnet`.

### Live Deployments
- Mainnet: *TODO*
- Ropsten: `0x87f11cba2Db0cB22b9679c14860bA5Be49Fd0717`
- Rinkeby: `0x029374cA831F9F4B04a0D896B8d00CcE05f30D8f`

## Thank You

If you have any **improvement suggestions**, **feedback** or **bug reports** please feel free add an issue, or reach out via Twitter [@jwahdatehagh](https://twitter.com/jwahdatehagh) or Email [jalil@1001.digital](jalil@1001.digital).
