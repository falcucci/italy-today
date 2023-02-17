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


const prefix = `I want you to act like a news article summarizer. I will input text from a news article and your job is to convert it into an useful summary of a few sentences. Do not repeat sentences and make sure all sentences are clear and complete:\n\n`;

module.exports = {
  promiseHandler,
  prefix
};
