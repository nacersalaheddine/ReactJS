module.exports = {
  "root": true,
  "extends": ["eslint:recommended"],
  "env": {
    "node": true,
  },
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "comma-spacing": ["error", { "before": false, "after": true }],
    "eol-last": ["error", "always"],
    "indent": ["error", 2, { "MemberExpression": 1 }],
    "no-multiple-empty-lines": ["error"],
    "no-new-symbol": "error",
    "no-trailing-spaces": ["error"],
    "no-undef": ["error"],
    "no-unused-vars": ["error"],
    "object-curly-spacing": ["error", "always"],
    "prefer-const": 2,
    "quotes": ["error", "single"],
    "semi": ["error", "never"],
    "space-in-parens": ["error", "never"],
    "strict": [2, "never"]
  }
}
