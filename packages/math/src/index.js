// Services
const { mathServices } = require('./useCases');

// Domains
const { MathModule } = require('./domains');

module.exports = {
  sumOperation: mathServices.sumOperation(MathModule)
};
