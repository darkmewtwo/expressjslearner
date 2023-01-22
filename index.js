const express = require('express')

const adminJs = require('adminjs')

const AdminJSExpress = require('@adminjs/express')

const {db_connection, connection} = require('./database');



const app = express()

db_connection.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err));


const adminJS = new adminJs({
  // ...
})

adminJS.watch()

const adminRouter = AdminJSExpress.buildRouter(adminJS)
app.use(adminJS.options.rootPath, adminRouter)

console.dir(adminJS)
console.log(connection)

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.get('/what', (req, res) => {
  res.send('Hello, no  way!')
})
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})