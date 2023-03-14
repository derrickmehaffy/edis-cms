/**
 * server-location controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::server-location.server-location",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;
      const entity = await strapi.db
        .query("api::server-location.server-location")
        .findOne({
          where: { slug },
        });

      const sanitizedEntity = await this.sanitizeOutput(entity);

      return this.transformResponse(sanitizedEntity);
    },
  })
);
