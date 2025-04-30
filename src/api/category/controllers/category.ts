/**
 * category controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::category.category",
  ({ strapi }) => ({
    async getAvailableOptions(ctx) {
      ctx.body = {
        data: {
          sizes: ["31", "32", "33", "34", "M", "L", "XL"],
          colors: [
            {
              name: "آبی تیره",
              hexCode: "#5B6B80",
            },
            {
              name: "آبی",
              hexCode: "#5F8099",
            },
            {
              name: "آبی روشن",
              hexCode: "#A2A9A7",
            },
            {
              name: "سبز",
              hexCode: "#1e8449 ",
            },
            {
              name: "مشکی",
              hexCode: "#17202a",
            },
            {
              name: "سورمه ای",
              hexCode: "#1f618d",
            },
          ],
        },
      };
    },
  })
);
