# Check Address Library
A Solidity library for the Ethereum blockchain to easily distinguish smart contract and external addresses.

## Deployments
- Mainnet: `0x`
- Rinkeby: `0x`

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

1. `npm install`
2. `npm run test` / `hh test` (if you have `hh` installed locally.
