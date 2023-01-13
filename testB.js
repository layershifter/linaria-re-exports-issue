const Babel = require("@babel/core");

const resultA = Babel.transformFileSync("./codeB/usePopoverSurfaceStyles.js", {
  presets: ["@linaria"],
});

console.log("resultB.code", resultA.code);
