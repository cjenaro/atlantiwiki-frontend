const groq = require("groq");
const client = require("../utils/sanityClient");
module.exports = async function () {
  const mains = await client.fetch(groq`*[_type=="weapon"]`);

  return mains;
};
