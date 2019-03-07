const path = require('path')

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.(js|jsx)$/,
    include: path.resolve(__dirname, '../node_modules'),
    loader: require.resolve('babel-loader'),
    query: {
      cacheDirectory: true,
      presets: ['@babel/preset-env', '@babel/preset-react']
    }
  })

  defaultConfig.resolve.extensions.push('.js', '.jsx')

  return defaultConfig
}
