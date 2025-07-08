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
          sizes: ["31", "32", "33", "34", "40", "41", "M", "L", "XL"],
          colors: [
            {
              name: "آبی خیلی تیره",
              hexCode: "#071f35",
            },
            {
              name: "آبی تیره",
              hexCode: "#24496b",
            },
            {
              name: "آبی متوسط",
              hexCode: "#446d92",
            },
            {
              name: "آبی روشن",
              hexCode: "#98b1c8",
            },
            {
              name: "آبی خیلی روشن",
              hexCode: "#f7fafe",
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
              name: "سفید",
              hexCode: "#ffffff",
            },
            {
              name: "قهوه‌ای",
              hexCode: "#a97f50",
            },
            {
              name: "زرشکی تیره",
              hexCode: "#9F6E6A",
            },
          ],
        },
      };
    },
  })
);
