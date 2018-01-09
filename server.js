const express = require('express');
const app = express();
const history = require('connect-history-api-fallback');
const PORT = process.env.PORT || 8080;
const staticFileMiddleware = express.static(__dirname + '/dist');

app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true,
}));

app.use(staticFileMiddleware);

app.listen(PORT);

console.log('Server running at port ' + PORT);

