/** @type {import('@graphql-codegen/cli').CodegenConfig} */
const config = {
  overwrite: true,
  schema: "https://server.neers.com.pk/graphql",
  documents: "app/graphql/**/*.graphql", // Look for .graphql files inside queries/mutation folders
  generates: {
    "app/graphql/generated/": { // Store generated files in a separate folder
      preset: "client",
      plugins: []
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
