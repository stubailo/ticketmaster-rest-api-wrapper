import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import json from "rollup-plugin-json";
import babel from 'rollup-plugin-babel';

export default {
  input: "src/server.js",
  output: {
    file: "app.js",
    format: "cjs",
    sourcemap: false,
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    json(),
    resolve({ preferBuiltins: true }),
    commonjs({
      include: "node_modules/**",
      namedExports: {
        "node_modules/graphql-tools/dist/index.js": ["makeExecutableSchema"],
      },
    }),
    // process.env.NODE_ENV === "production" && uglify(),
  ],
};
