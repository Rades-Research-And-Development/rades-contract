import { ethers } from "hardhat";
async function main() {
  const Registry = await ethers.getContractFactory("Registry")
  const RegistryInstance = await Registry.deploy()

  const Marketplace = await ethers.getContractFactory("Marketplace")
  const MarketplaceInstance = await Marketplace.deploy(RegistryInstance.address)

  const CreatureAccessory = await ethers.getContractFactory("CreatureAccessory")
  const CreatureAccessoryInstance = await CreatureAccessory.deploy(MarketplaceInstance.address)

  const Creature = await ethers.getContractFactory("Creature")
  const CreatueInstance = await Creature.deploy(MarketplaceInstance.address)

  const RadesMockCurrency = await ethers.getContractFactory("RadesMockCurrency")
  const RadesMockCurrencyInstance = await RadesMockCurrency.deploy()
  // const faucetContractFactory = await ethers.getContractFactory("FaucetContract")
  // const faucetContractInstance = await faucetContractFactory.deploy()
  // const utilsContractFactory = await ethers.getContractFactory("Utils")
  // const utilsContractInstance = await utilsContractFactory.deploy()
  // const artCollectibleContractFactory = await ethers.getContractFactory("ArtCollectibleContract")
  // const artCollectibleContractInstance = await artCollectibleContractFactory.deploy()
  // const artMarketplaceContractFactory = await ethers.getContractFactory("ArtMarketplaceContract", {
  //   libraries: {
  //     Utils: utilsContractInstance.address,
  //   },
  // })
  // const artMarketplace = await artMarketplaceContractFactory.deploy()
  // await artMarketplace.setArtCollectibleAddress(artCollectibleContractInstance.address)
  // await artCollectibleContractInstance.setMarketPlaceAddress(artMarketplace.address)
  // await artMarketplace.deployed()

  console.log(`Registry contract deployed to ${RegistryInstance.address}`)
  console.log(`Marketplace contract deployed to ${MarketplaceInstance.address}`);
  console.log(`Creature contract deployed to ${CreatueInstance.address}`);
  console.log(`Creature Accessory contract deployed to ${CreatureAccessoryInstance.address}`);
  console.log(`RadesMockCurrency contract deployed to ${RadesMockCurrencyInstance.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
