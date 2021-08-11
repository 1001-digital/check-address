async function main () {
  const [deployer] = await ethers.getSigners()

  console.log('Deploying contracts with the account:', deployer.address)

  const CheckAddress = await ethers.getContractFactory('CheckAddress')
  const contract = await CheckAddress.deploy()

  console.log('CheckAddress contract address:', contract.address)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
