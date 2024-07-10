module.exports = {
  routes: [
    {
      method: "GET",
      path: "/getSck",
      handler: "custom.getSck",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
