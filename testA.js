const Babel = require("@babel/core");

const resultA = Babel.transformFileSync("./code/usePopoverSurfaceStyles.js", {
  presets: ["@linaria"],
});

console.log("resultA.code", resultA.code);
