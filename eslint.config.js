const js = require("@eslint/js");

module.exports = [

  js.configs.recommended,{

    files: ["src/**/*.js"],

    languageOptions: {

      sourceType: "commonjs",

      globals: {

        __dirname: "readonly",
        console: "readonly",
        module: "readonly",
        process: "readonly",
        require: "readonly",

      },
    },
  },
];