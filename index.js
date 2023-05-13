const ethers = require('ethers')

async function connect() {
  if (window.ethereum) {
    await ethereum.request({ method: 'eth_requestAccounts' })
  }
}

async function execute() {
  //address
  //contract ABI (blueprint to interact with a contract)
  //function
  //node connection +
}

module.exports = {
  connect,
  execute,
}
