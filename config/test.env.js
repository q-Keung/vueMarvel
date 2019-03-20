'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  BASE_API:'"https://www.easy-mock.com/mock/5c9197aa402a6524e9cf65b1/marvel"'
})
