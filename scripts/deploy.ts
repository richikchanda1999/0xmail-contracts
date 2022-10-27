import { ethers } from "hardhat";

async function main() {
  const Communication = await ethers.getContractFactory("Communication");
  const communication = await Communication.deploy();

  await communication.deployed();

  console.log(`Communication deployed to ${communication.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
