import { Context } from "koa";

export default ({ strapi }: { strapi: any }) => ({
  async register(ctx: Context) {
    const { email, username, password, firstName, lastName } = ctx.request.body;

    if (!email || !username || !password) {
      ctx.throw(400, "Missing email, username, or password.");
    }

    const existingUser = await strapi.entityService.findMany(
      "plugin::users-permissions.user",
      {
        filters: { email },
      }
    );

    if (existingUser.length > 0) {
      ctx.throw(400, "Email already taken");
    }

    const newUser = await strapi.entityService.create(
      "plugin::users-permissions.user",
      {
        data: {
          email,
          username,
          password,
          firstName,
          lastName,
          confirmed: true, // or false if you want to force email confirmation
        },
      }
    );

    const jwtService = strapi.plugin("users-permissions").service("jwt");
    const token = jwtService.issue({ id: newUser.id });

    ctx.body = {
      jwt: token,
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
      },
    };
  },
});
