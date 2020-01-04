const path = require('path');

module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "prettier",
    "prettier/react",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react/recommended",
    "plugin:flowtype/recommended",
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "import",
    "prettier",
    "react",
    "react-hooks",
    "flowtype"
  ],
  "rules": {
    "curly": ["error", "all"],
    "quotes": ["error", "single"],
    "no-alert": "error",
    "no-console": "error",
    "no-redeclare": "error",
    "no-var": "error",
    "import/order": ["error", {
      "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
      "alphabetize": {
        order: 'asc',
      }
    }],
    "import/no-named-as-default": "off",
    "no-template-curly-in-string": "error",
    "prefer-destructuring": "error",
    "prefer-const": "error",
    "prefer-arrow-callback": "error",
    "prettier/prettier": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/prefer-stateless-function": "error",
    "semi": "error"
  },

  "settings": {
    "import/resolver": {
      "webpack": {
        "config": path.resolve("./webpack.config.babel.js")
      }
    },
    "import/internal-regex": "^(scss|shared|components|store|config)/"
  },
};
