'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API:'"https://www.easy-mock.com/mock/5c9197aa402a6524e9cf65b1/marvel"'
})
