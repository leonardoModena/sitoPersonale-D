var express = require('express');
var app = express();
const PORT = 3030;
const { readFile } =  require('fs').promises;

app.use(express.static('public'));
// Home page route.
app.get('/', async (req, res) => {
  res.send( await readFile('./public/html/index.html', 'utf8'));
})
app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));
