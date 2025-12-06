/**
 * company-info controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::company-info.company-info', ({ strapi }) => ({
    async profile(ctx) {
        try {
            const result = await strapi.entityService.findMany("api::company-info.company-info", {
                populate: ['logo', 'Seo'],
                // populate: {
                //     seo: {
                //         fields: ["metaTitle"],
                //     },
                // },
            })

            if (!result || result.length === 0) {
                return ctx.notFound("Company profile not found!")
            }

            return result[0]
        } catch (error) {
            ctx.throw(500, error)
        }
    }
}));
