const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP
const schema = require('./schema.js')

const app = express();

app.use('/graphqli', expressGraphQL({
    schema: schema,
    graphiql: true
}));

app.listen(4000, () =>{
    console.log('Server is running on port 4000 http://localhost:4000/graphqli');
});