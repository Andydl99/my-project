'use strict';

/**
 * audit-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::audit-list.audit-list');
