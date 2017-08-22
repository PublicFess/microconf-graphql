import express from  'express';
const app = express();
import bodyParser from  'body-parser';
import {
  graphqlExpress,
  graphiqlExpress,
} from  'graphql-server-express';
import { schema } from './schema';


app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

