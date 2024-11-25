const esbuild = require("esbuild");
const fg = require("fast-glob");

const importPath = (filePath) => `import "./${filePath}";`;

const componentFiles = fg.sync([
  "node_modules/@kickstartds/ds-agency-premium/dist/components/**/*.client.js",
]);
const entryFile = `\
${componentFiles.map(importPath).join("\n")}
`;

const build = async () => {
  await esbuild.build({
    stdin: {
      contents: entryFile,
      resolveDir: ".",
      loader: "ts",
    },
    format: "esm",
    bundle: true,
    // minify: true,
    outfile: "public/client.js",
    logLevel: "info",
    plugins: [],
    loader: {
      ".scss": "empty",
      ".css": "empty",
    },
  });
};

build();
