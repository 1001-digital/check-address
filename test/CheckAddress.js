const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('CheckAddress Library', async () => {
  let CheckAddress,
      DummyContract,
      dummyContract,
      external,
      library

  beforeEach(async () => {
    CheckAddress = await ethers.getContractFactory('CheckAddress');
    DummyContract = await ethers.getContractFactory('DummyContract');

    // Get an external address
    [ external ] = await ethers.getSigners()

    // Deploy the smart dummyContract
    dummyContract = await DummyContract.deploy()
    // Deploy the library
    library = await CheckAddress.deploy()
  })

  it('Should report an external address as external', async () => {
    expect(await library.isExternal(external.address)).to.be.true
  })

  it('Should report an external address as not a dummyContract', async () => {
    expect(await library.isContract(external.address)).to.be.false
  })

  it('Should report a smart dummyContract address as a contract', async () => {
    expect(await library.isContract(dummyContract.address)).to.be.true
  })

  it('Should report a smart contract address as not external', async () => {
    expect(await library.isExternal(dummyContract.address)).to.be.false
  })

  it('Shoud also when called from within a contract constructor', async () => {
    const CallerContract = await ethers.getContractFactory('CallFromConstructor', {
      libraries: {
        CheckAddress: library.address,
      },
    })

    const checkContract = await CallerContract.deploy(dummyContract.address)
    expect(await checkContract.isContract()).to.be.true

    const checkExternal = await CallerContract.deploy(external.address)
    expect(await checkExternal.isContract()).to.be.false
  })
})
