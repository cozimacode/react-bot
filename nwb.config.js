module.exports = {
  type: "react-component",
  npm: {
    esModules: true,
    umd: {
      global: "ReactBot",
      externals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
    },
  },
};
