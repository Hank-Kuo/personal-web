module.exports = {
  extends: "airbnb",
  plugins: ["react", "prettier"],
  parser: "babel-eslint",
  rules: {
    "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx"] }],
    "func-names": [0],
    "new-cap": [
      2,
      { newIsCap: true, capIsNew: true, capIsNewExceptions: ["List", "Map"] },
    ],
    "linebreak-style": [0],
    "no-console": "off",
    "react/prefer-stateless-function": 0,
    "import/prefer-default-export": "off",
    "no-param-reassign": 0,
    "no-underscore-dangle": 0,
    "react/prop-types": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-props-no-spreading": 0,
    "react/no-array-index-key": 0,
    "react/no-danger": "off",
    "no-alert": "off",
    quotes: ["error", "double"],
  },
  env: {
    browser: true,
  },
};
