const sanityClient = require("@sanity/client");

const config = {
  projectId: "2i1nlxq0",
  dataset: "production",
  useCdn: true,
};

module.exports = sanityClient(config);
