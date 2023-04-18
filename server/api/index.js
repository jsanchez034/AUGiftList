const express = require('express');
const verifyProof = require('../utils/verifyProof');
const cors = require('cors');

const app = express();
const port = process.env.NODE_ENV === 'production' ? 80 : 1225;

app.use(cors());
app.use(express.json());

// TODO: hardcode a merkle root here representing the whole nice list
// paste the hex string in here, without the 0x prefix
const MERKLE_ROOT = '4c9e7da24e8dc945eaeabb619269d214040bb6e7995b99df610cf2fc4e3afd5b';

app.post('/api/gift', (req, res) => {
  const {
    proof,
    name
  } = req.body;

  const isInTheList = verifyProof(proof, name, MERKLE_ROOT);
  if(isInTheList) {
    res.send("You got a toy robot!");
  }
  else {
    res.send("You are not on the list :(");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
