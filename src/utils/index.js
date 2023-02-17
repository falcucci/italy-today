/**
 *
 * takes a promise and returns the promise's data on success or
 * an error on failure.
 *
 * @param {Promise} promise - The promise to be handled
 *
 * @returns {Array} - An array with the first element being either
 * an error or null and the second element being either the data
 * or the error.
 */
const promiseHandler = promise => {
  return promise.then(data => [null, data]).catch(err => [err]);
};

module.exports = {
  promiseHandler,
};
