const { getFastify } = require('./dist');

require("dotenv").config()
const server = getFastify();

server.listen(8080, '0.0.0.0', (err, address) => {
  if (err) {
    console.error(err);
  }
  console.info(`server listening on ${address}`);
});
