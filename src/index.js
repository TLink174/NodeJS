const express = require('express')
const morgan = require('morgan')

const app = express()
const port = 3000
import configViewEgine from '../src/configs/viewEngine'
import webRouter from '../src/routes/web';



// HTTP Logger
// app.use(morgan('combined'))

// Template engines
configViewEgine(app);
webRouter(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})