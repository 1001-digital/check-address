const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('CheckAddress Library', async () => {
  let CheckAddress,
      Test,
      external,
      contract,
      library

  beforeEach(async () => {
    CheckAddress = await ethers.getContractFactory('CheckAddress');
    Test = await ethers.getContractFactory('Test');

    // Get an external address
    [ external ] = await ethers.getSigners()

    // Deploy the smart contract
    contract = await Test.deploy()
    // Deploy the library
    library = await CheckAddress.deploy()
  })

  it('Should report an external address as external', async () => {
    expect(await library.isExternal(external.address)).to.be.true
  })

  it('Should report an external address as not a contract', async () => {
    expect(await library.isContract(external.address)).to.be.false
  })

  it('Should report a smart contract address as a contract', async () => {
    expect(await library.isContract(contract.address)).to.be.true
  })

  it('Should report a smart contract address as not external', async () => {
    expect(await library.isExternal(contract.address)).to.be.false
  })
})
