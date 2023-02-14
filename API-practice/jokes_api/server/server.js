const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.json(), express.urlencoded({ extended: true }));

require("./config/mongoose.config");

require("./routes/joke.routes")(app);

app.listen(8000, () => console.log(`server: ${PORT}`));
