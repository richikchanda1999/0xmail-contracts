import { ethers } from "hardhat";

async function main() {
    const com = await (await ethers.getContractFactory("Communication")).attach("0x99aFb206baA3d91C8d959852407e3ac677c0ffa3")
    console.log(`Communication deployed at ${com.address}`);

    const tx = await com.createLink(5, "709342e9e5f8f5799194dcc3a63a35db1c06bd21c2f4aa6561b347ebe81449e6", "0x4e35fF1872A720695a741B00f2fA4D1883440baC")
    console.log(tx)
    const txn = await tx.wait()
    console.log(txn)
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });