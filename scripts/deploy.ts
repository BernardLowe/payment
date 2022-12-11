import '@nomiclabs/hardhat-ethers';
import { ethers } from "hardhat";

async function main() {
  const Utils = await ethers.getContractFactory("Utils");
  const utils = await Utils.deploy();

  await utils.deployed();

  console.log(`Utils deployed to ${utils.address}`);

  const RubyIP = await ethers.getContractFactory("RubyIP");
  const rubyIP = await RubyIP.deploy();

  await rubyIP.deployed();

  console.log(`RubyIP deployed to ${rubyIP.address}`);

  const RubyRedeem = await ethers.getContractFactory("RubyRedeem");
  const rubyRedeem = await RubyRedeem.deploy(rubyIP.address);

  await rubyRedeem.deployed();

  console.log(`RubyRedeem deployed to ${rubyRedeem.address}`);

  const RubyTransfer = await ethers.getContractFactory("RubyTransfer");
  const rubyTransfer = await RubyTransfer.deploy(rubyIP.address);

  await rubyTransfer.deployed();

  console.log(`RubyTransfer deployed to ${rubyTransfer.address}`);

  const RubyETH = await ethers.getContractFactory("RubyETH");
  const rubyETH = await RubyETH.deploy(rubyTransfer.address, rubyRedeem.address, "10000000000000000");

  await rubyETH.deployed();

  console.log(`RubyETH deployed to ${rubyETH.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
