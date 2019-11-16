require("dotenv").config()

import logger from "morgan";
import schema from "./schema";
import {GraphQLServer} from "graphql-yoga";

const PORT = process.env.PORT || 4000;

// const typeDefs = `
//     type Query{
//         hello:String!
//     }
// `;

// const resolvers = {
//     Query:{
//         hello: () => "Hi"
//     }
// }
const server = new GraphQLServer({schema})

server.express.use(logger("dev"));
server.start({port:PORT} , () => console.log(`Server Running on port http://localhost:${PORT}`));