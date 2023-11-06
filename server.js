const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/get_prices', async (req, res) => {
  const fetch = (await import('node-fetch')).default;
  const response = await fetch('https://api.porssisahko.net/v1/latest-prices.json');
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message) 
  }
  res.send({ express: body });
});
