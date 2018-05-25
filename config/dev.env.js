const merge = require('webpack-merge')
let prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
	ENV_CONFIG: '"dev"',
	BASE_API: '"https://api-dev"'
})
