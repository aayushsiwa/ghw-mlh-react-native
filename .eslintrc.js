// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:react/jsx-runtime",
    "expo",
    "prettier",
  ],
  plugins: ["react-native", "prettier"],
  rules: {
    // "prettier/prettier": "error",
    "react-native/no-unused-styles": "error",
    "react-native/no-inline-styles": "error",
    "react-native/no-color-literals": "off",
    "react-native/sort-styles": "off",
  },
};
