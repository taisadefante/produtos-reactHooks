module.exports = {
  env: {
    browser: true,
  },

  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],

  parserOpyions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react-refresj"],
  rules: {
    "react-refresh/only-export-components": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "no-unsafe-finally": "off",
    "no-unused-vars": "off",
    "react/jsx-key": "off",
  },
};
