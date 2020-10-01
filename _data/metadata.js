const groq = require("groq");
const client = require("../utils/sanityClient");
module.exports = async function () {
  const siteSettings = await client.fetch(groq`
    *[_type=="siteSettings"]{
      ...
    }[0]
  `);

  return siteSettings;
};
