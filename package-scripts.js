require('dotenv').config()

const npsUtils = require('nps-utils')

const { rimraf, series } = npsUtils

module.exports = {
  scripts: {
    installNodePrune: 'curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | bash -s -- -b ./',
    prune: {
      default: './node-prune',
      packages: 'yarn lerna exec -- npm prune'
    },
    lernaBootstrap: 'yarn lerna bootstrap',
    lernaClean: 'lerna clean --yes',
    cleanModules: rimraf('./node_modules'),
    bootstrap: {
      description: 'Initial setup',
      default: series.nps('lernaBootstrap', 'installNodePrune', 'prune')
    },
    lint: 'yarn lerna run lint',
    testAll: 'yarn lerna run lint',
    test: {
      default: series.nps('lint', 'test')
    }
  }
}
