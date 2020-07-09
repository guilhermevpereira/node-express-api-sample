const express = require('express')

app = express()

app.listen(3000, () => {
    console.log("Running... Port 3000");
    
})

app.get("/test", (req, res) => {
    res.send("GET Request /test")
})