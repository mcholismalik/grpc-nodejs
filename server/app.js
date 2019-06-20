const express = require("express")
const app = express()
require("../server/gRPC")

app.listen(3000, undefined, () => {
  console.log("Listening to port: 3000")
})
