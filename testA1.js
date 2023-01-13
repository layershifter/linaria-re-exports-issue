const Babel = require("@babel/core");

const resultA = Babel.transformFileSync("./codeA1/usePopoverSurfaceStyles.js", {
  presets: ["@linaria"],
});

console.log("resultA1.code", resultA.code);
