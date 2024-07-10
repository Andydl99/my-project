// @ts-nocheck
"use strict";

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    // strapi
    //   .plugin("custom")
    //   .controller(
    //     "custom-controller",
    //     require("./api/custom/controllers/custom-controller")
    //   );
    // strapi
    //   .plugin("custom")
    //   .route("custom-routes", require("./api/custom/routes/custom-routes"));
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
