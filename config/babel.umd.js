module.exports = {
  modules: false,
  presets: [
    ["latest", { es2015: { modules: false } }],
    "es2015-rollup",
    "react",
    "stage-0"
  ]
};
