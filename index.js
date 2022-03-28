const express = require("express");
const port = 3000;
const app = express();

app.use("/", express.static("public") );

app.listen(port, err => {
    if(err) {
        return console.log(`ERROR ${err}`);
    } else {
        console.log(`Listening at port ${port}`);
    }
})