const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, reply) => {
  reply.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example in listening on port ${port}`)
})