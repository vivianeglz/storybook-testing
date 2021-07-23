module.exports = {
  verbose: true,
  forceExit: true,
  testMatch: ["/**/**/*.test.{j,t}s?(x)"],
  transform: {
    "^.+\\.js?$": require.resolve("babel-jest"),
    "^.+\\.vue$": require.resolve("vue-jest"),
  },
};
