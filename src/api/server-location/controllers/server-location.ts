/**
 * server-location controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::server-location.server-location",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;
      const entity = await strapi.db
        .query("api::server-location.server-location")
        .findOne({
          where: { slug: id },
        });

      const sanitizedEntity = await this.sanitizeOutput(entity);

      return this.transformResponse(sanitizedEntity);
    },
  })
);
