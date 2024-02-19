import express from 'express'
import cors from 'cors'
import fs from 'fs'
import https from 'https'
import routes from './routes/index.js'
import bodyParser from 'body-parser'
import { CONSTANTS } from './utils/constants.js'

const app = express()


app.use(bodyParser.json({limit: "15mb"}))

app.use('/', routes)

// const options = {
//   cert: fs.readFileSync('fullchain.pem'),
//   key: fs.readFileSync('privkey.pem')
// }


// https.createServer(options, app).listen(443);


app.listen(CONSTANTS.APP_PORT, () => {
  console.log(`MiMi's Backend is running on port: ${CONSTANTS.APP_PORT}`)
})