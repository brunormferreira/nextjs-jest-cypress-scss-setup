module.exports = {
  presets: ['next/babel', '@babel/preset-typescript'],
  env: {
    test: {
      plugins: ['styled-jsx/babel-test'],
    },
  },
}
