export default {
  routes: [
    {
      method: "GET",
      path: "/categories/:id/available-options",
      handler: "category.getAvailableOptions",
      config: {
        auth: false,
      },
    },
  ],
};
