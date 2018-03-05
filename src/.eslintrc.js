module.exports = {
  "root": true,
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "eol-last": ["error", "always"],
    "indent": ["error", 2, { "MemberExpression": 1 }],
    "no-multiple-empty-lines": ["error"],
    "no-new-symbol": "error",
    "no-trailing-spaces": ["error"],
    "no-undef": ["error"],
    "no-unused-vars": ["error"],
    "object-curly-spacing": ["error", "always"],
    "object-shorthand": "error",
    "prefer-const": 2,
    "quotes": ["error", "single"],
    "semi": ["error", "never"],
    "space-in-parens": ["error", "never"],
    "strict": [2, "never"]
  }
}
