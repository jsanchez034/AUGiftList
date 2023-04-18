import niceList from './niceList.json';
import MerkleTree from './MerkleTree';
import api from './api';

export default async function sendProof(name) {
  const mTree = new MerkleTree(niceList);

  const { data: gift } = await api.post('/gift', {
    root : mTree.getRoot(),
    proof : mTree.getProof(niceList.indexOf(name)),
    name
  });

  return gift;
}