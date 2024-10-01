// swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Product and Review API',
      version: '1.0.0',
      description: 'API documentation for products and reviews',
    },
    servers: [
      {
        url: 'http://localhost:3000', // API server URL
      },
    ],
  },
  apis: ['./routes/*.js'], // Point to the docs directory where api-docs.js is located
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

function setupSwaggerDocs(app) {
  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log('Swagger docs available at http://localhost:3000/swagger');
}

module.exports = setupSwaggerDocs;
