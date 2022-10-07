const express = require('express')
const app = express();
const port = process.env.PORT || 4047
const { graphqlHTTP} = require('express-graphql')
// const bodyParser = require('body-parser')
const cors = require('cors')
const schema = require('./schema/index')


// to access graphql API from the client side
app.use(cors())
app.use(express.json())
// bodyParser is needed just for POST.
app.use('/graphql', graphqlHTTP({ 
  schema,
  graphiql:true }));
// for the graphiql interface
// app.get('/graphql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(port, (err) => {
  if (err) throw err
  console.log(`Graphql Server started on: http://localhost:${port}`)
})
