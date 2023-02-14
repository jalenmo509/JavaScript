const express = require('express');
const cors = require('cors'); //Cors
const app = express();


require('./server/config/mongoose.config');


app.use(cors()); //Cors
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
require('./server/routes/product.routes')(app); //Product

app.listen(8000, () => {
  console.log("Listening at Port 8000")
})