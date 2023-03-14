export default {
  routes: [
    {
      method: "GET",
      path: "/server-locations/:slug",
      handler: "server-location.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
