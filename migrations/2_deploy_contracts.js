var BabaCoin = artifacts.require("./BabaCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(BabaCoin);
};
