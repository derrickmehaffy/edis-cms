export default {
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      defaultLimit: 10,
      maxLimit: 50,
      apolloServer: {
        tracing: false,
        introspection: true,
      },
    },
  },
};
