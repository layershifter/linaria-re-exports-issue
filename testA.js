const Babel = require("@babel/core");

const resultA = Babel.transformFileSync("./codeA/usePopoverSurfaceStyles.js", {
  presets: ["@linaria"],
});

console.log("resultA.code", resultA.code);
