/**
 * article controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::article.article', ({strapi}) => ({
    async greetings(ctx) {
        try {
            const { name } = ctx.query
            ctx.body = {
                message: "Hello world",
                inputName: name,
                timeStamp: new Date().toISOString()
            }            
        } catch (error) {
            ctx.body = error
        }
    },

    async submitArticles(ctx) {
        try {
            const { title } = ctx.request.body

            if (!title) {
                return ctx.badRequest("Title is required!")
            }

            const response = {
                status: "Created",
                title: title,
                waktu: new Date().toISOString()
            }

            ctx.body = response

        } catch (error) {
            ctx.body = error;
        }
    }
}));

