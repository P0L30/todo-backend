import queryResolvers from "./query";
import mutationResolvers from "./mutation";

const resolvers = {
  Query: { ...queryResolvers },
  Mutation: { ...mutationResolvers },
};

export default resolvers;
