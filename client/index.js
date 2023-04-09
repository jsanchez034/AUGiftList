const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  const mTree = new MerkleTree(niceList);
  const name = 'Juan Carlos';

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    root : mTree.getRoot(),
    proof : mTree.getProof(niceList.indexOf(name)),
    name
  });

  console.log({ nameIndex: niceList.indexOf(name), root : mTree.getRoot(), gift });
}

main();