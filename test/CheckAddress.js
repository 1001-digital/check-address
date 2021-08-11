const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('CheckAddress Library', () => {
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

  describe('Beware of the Exploit', () => {
    let OnlyExternal,
        Attacker,
        contract

    beforeEach(async () => {
      OnlyExternal = await ethers.getContractFactory('OnlyExternal', {
        libraries: {
          CheckAddress: library.address,
        },
      })
      Attacker = await ethers.getContractFactory('CallerContract')

      // The contract to be attacked
      contract = await OnlyExternal.deploy();
    })

    it('Can be exploited when called from within a contract constructor', async () => {
      // Can circumvent isExtternal check when calling from a constructor
      // Simple `msg.sender == tx.origin` doesn't have this particular issue.
      const attacker = await Attacker.deploy(contract.address)
      expect(await attacker.circumventedInConstructor()).to.be.true
    })

    it('Can\'t be exploited when called after contract deployment', async () => {
      const attacker = await Attacker.deploy(contract.address)

      // Calling after deployment works fine.
      await expect(attacker.tryToCircumventAfterConstruction())
        .to.be.revertedWith("Must not call from a contract")
    })
  })

})
