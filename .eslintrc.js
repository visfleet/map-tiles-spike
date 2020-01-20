module.exports = {
  extends: [
    "react-app",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:prettier/recommended",
  ],
  plugins: ["import"],
  rules: {
    "comma-dangle": ["error", "always-multiline"],
  },
};
