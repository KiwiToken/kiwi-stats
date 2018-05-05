web3.version.getNetwork((err, netId) => {
  log("Network: ", netId);
  var network = "unknown network";
 switch (netId) {
   case "1":
     network = "Main Ethereum Network";
     console.log('This is mainnet')
     break
   case "2":
     network = "Deprecated Morden Network";
     console.log('This is the deprecated Morden test network.')
     break
   case "3":
     network = "Ropsten Test Network!!";
     console.log('This is the ropsten test network.')
     break
   case "4":
     network = "Rinkeby Test Network";
     console.log('This is the Rinkeby test network.')
     break
   case "42":
     network = "Kovan Test Network";
     console.log('This is the Kovan test network.')
     break
   default:
     console.log('This is an unknown network.')
 }
 el_safe('#networkName').innerHTML = network;
})
