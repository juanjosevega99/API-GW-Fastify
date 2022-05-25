async function liveness() {
  return {
    status: 'Server running'
  };
}

module.exports = {
  liveness
};
