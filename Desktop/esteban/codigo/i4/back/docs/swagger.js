const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: "Documentacion la API",
      version: "1.0.0",
    },
    components: {
      schemas: {
        Audit: {
          type: "object",
          required: ["method", "url", "date", "response"],
          properties: {
            method: {
              type: "string",
            },
            url: {
              type: "string",
            },
            date: {
              type: "string",
            },
            response: {
              type: "array",
            },
          },
        },
      },
    },
  },
  apis: ['./routes/*.js'], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);

module.exports = {
  openapiSpecification
}
