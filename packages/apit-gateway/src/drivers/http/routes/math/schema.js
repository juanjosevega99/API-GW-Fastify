module.exports = {
  body: {
    type: 'object',
    properties: {
      inputA: { type: 'string' },
      inputB: { type: 'string' }
    },
    required: ['inputA', 'inputB']
  }
};
