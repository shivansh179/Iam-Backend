import { ethers } from "hardhat";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const Voting = await deploy("Voting", {
    from: deployer,
    args: [],
    log: true,
  });

  console.log("Voting contract deployed to:", Voting.address);

  // Optionally save the address in a JSON file
  const fs = require('fs');
  const path = require('path');
  fs.writeFileSync(path.resolve(__dirname, "../deployedAddress.json"), JSON.stringify({ contractAddress: Voting.address }, null, 2));
};

export default deploy;
deploy.tags = ["Voting"];
