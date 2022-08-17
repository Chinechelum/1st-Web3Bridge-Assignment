import { ethers } from "hardhat";

async function main() {
    // const lockedAmount = ethers.utils.parseEther("1");
    // let valid1, valid2, valid3, valid4;
    let [valid1, valid2, valid3, valid4, valid5] = await ethers.getSigners();

    const MySwapThing = await ethers.getContractFactory("MySwap");
    const mySwapThing = await MySwapThing.deploy();

    await mySwapThing.deployed();

    console.log(
        "factory contract deployed to this address",
        mySwapThing.address
    );
    // let cloned = await MySwapThing.cloneMultiSig([
    //     valid1.address,
    //     valid2.address,
    //     valid3.address,
    //     valid4.address,
    //     valid5.address,
    // ]);

    // const clone2 = await MySwapThing
    //     .connect(valid2)
    //     .cloneMultiSig([
    //         valid1.address,
    //         valid2.address,
    //         valid3.address,
    //         valid4.address,
    //         valid5.address,
    //     ]);
    // let result = (await clone2.wait()).logs[0].topics.length;
    // let result1 = (await clone2.wait()).logs[0].topics[0];
    // let result2 = (await clone2.wait()).logs[0].topics[1];
    // let result3 = (await clone2.wait()).logs[0].topics[2];

    // console.log(result, "factory cloned successfully");
    // console.log("we are the logger", result1, result2, result3);
    

    // let clonedAddresses = await MySwapThing.ClonedAddresses();
    // console.log("\n", clonedAddresses);



}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
