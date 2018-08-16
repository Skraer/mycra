const path = require("path");

module.exports = {
  parser: "babel-eslint",
  root: true,
  extends: "airbnb",
  plugins: ["flowtype"],
  env: {
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    "react/sort-comp": [
      2,
      {
        order: [
          "type-annotations",
          "static-methods",
          "life-cycle",
          "everything-else",
          "render"
        ]
      }
    ],
    "react/no-unused-prop-types": 0,
    "flowtype/boolean-style": [2, "boolean"],
    "flowtype/define-flow-type": 1,
    "flowtype/generic-spacing": [2, "never"],
    "flowtype/no-primitive-constructor-types": 2,
    "flowtype/no-weak-types": 2,
    "flowtype/object-type-delimiter": [2, "comma"],
    "flowtype/require-valid-file-annotation": 2,
    "flowtype/semi": [2, "always"],
    "flowtype/space-after-type-colon": [2, "always"],
    "flowtype/space-before-generic-bracket": [2, "never"],
    "flowtype/space-before-type-colon": [2, "never"],
    "flowtype/union-intersection-spacing": [2, "always"],
    "flowtype/use-flow-type": 1,
    "flowtype/valid-syntax": 1
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    },
    "import/resolver": {
      node: {
        paths: [path.resolve(__dirname, "./app")]
      },
      jest: {
        paths: [path.resolve(__dirname, "./app")]
      }
    }
  }
};
