This is a demonstration for equitable "Smart Property".

To run your own version first run the contract code separately. I recommend running it on mist because it uses a very
nice interface. You could also run it in the geth command console, but, for novel users, running it this way may be confusing.

After deploying the contract, change the contract address accordingly in wallet.js and main.js.

Then run these commands inside the /app folder

$npm install
$npm install webpack
$webpack

Then you can run the embark/node server.

$node app.js

Your app should be ready on localhost:8080
The display should be ready on localhost:8080/display

Remember to run a geth node and change the rpcaddr accordingly. In the command below I was running my node on a vm with the hostname "dci-node-1.media.mit.edu". Also remember to change the rpcaddr and rpcport in your wallet.js and main.js if you want to use your own node.

Geth node command:
$geth --testnet --rpcapi "eth,net,web3" --rpc --rpcport "8545" --rpcaddr "dci-node-1.media.mit.edu" --fast --rpccorsdomain "*"

![Architecture](smrtprprty.png)
