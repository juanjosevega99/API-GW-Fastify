const Logger = require('../utils/logger');
const { operations } = require('../utils/constants');

const sumOperation = model =>
  function ({ inputA, inputB }) {
    if (isNaN(inputA) || isNaN(inputB)) {
      Logger.error('[math]: Inputs are not numbers', { inputA, inputB });
      throw new Error('Inputs must be numbers');
    }

    Logger.info('[math]: Performing sum operation');

    const result = inputA + inputB;

    model
      .create({
        input: JSON.stringify({ inputA, inputB }),
        output: JSON.stringify(result),
        operation: operations.SUM
      })
      .then(() => Logger.debug('[math]: Operation saved successfully'))
      .catch(err => Logger.error(`[math]: Operation error ${err.message}`));

    return result;
  };

module.exports = {
  sumOperation
};
