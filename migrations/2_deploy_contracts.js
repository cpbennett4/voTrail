const VoTrail = artifacts.require('../contracts/VoTrail.sol');

module.exports = (deployer) => {
  deployer.deploy(VoTrail);
};
