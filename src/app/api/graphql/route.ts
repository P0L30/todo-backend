import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { connectToDatabase } from "@/graphql/connect";
import typeDefs from "@/graphql/resolvers/query/getTodosQuery";
import resolvers from "@/graphql/resolvers";

connectToDatabase();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
});

export { handler as GET, handler as POST };
