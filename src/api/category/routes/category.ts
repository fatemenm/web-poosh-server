/**
 * category router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::category.category", {
  only: ["find", "findOne"],
  config: {
    find: {
      auth: false,
      policies: [],
      middlewares: [],
    },
    findOne: {
      auth: false,
      policies: [],
      middlewares: [],
    },
  },
});
