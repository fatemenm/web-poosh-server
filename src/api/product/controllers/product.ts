/**
 * product controller
 */

import { factories } from "@strapi/strapi";

type Stock = {
  id: number;
  size: string;
  color: string;
  quantity: number;
};

export default factories.createCoreController("api::product.product");
