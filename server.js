const express = require('express')
const app = express()
const port = process.env.PORT||3000
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(cors())

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
const routes = require('./routes/index');
app.use('/', routes);



app.listen(port, () => console.log(`server listening on port ${port}!`))