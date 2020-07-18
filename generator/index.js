module.exports = (api, opts, rootOptions) => {
  const utils = require('./utils')(api)

  api.extendPackage({
    dependencies: {
      "element-ui": "^2.4.5",
      "@ams-team/ams": "^0.25.17"
    }
  })

  api.injectImports(utils.getMain(), `import './plugins/element.js'`)
  api.injectImports(utils.getMain(), `import './plugins/ams.js'`)

  api.render({
    './src/plugins/element.js': './templates/src/plugins/element.js',
    './src/plugins/ams.js': './templates/src/plugins/ams.js',
    './src/ams/demo.js': './templates/src/ams/demo.js',
    './src/ams/list.js': './templates/src/ams/list.js',
    './src/config/data.json': './templates/src/config/data.json',
    './src/config/server.js': './templates/src/config/server.js',
    './src/App.vue': './templates/src/App.vue',
    './vue.config.js': './templates/vue.config.js'
  })

  if (opts.import === 'partial') {
    api.extendPackage({
      devDependencies: {
        'babel-plugin-component': '^1.1.1'
      }
    })
  } else if (opts.customTheme) {
    api.render({
      './src/element-variables.scss': './templates/src/element-variables.scss'
    })
    api.extendPackage({
      devDependencies: {
        'sass-loader': '^7.0.3',
        'node-sass': '^4.9.2'
      }
    })
  }

  api.onCreateComplete(() => {
    if (opts.import === 'partial') {
      utils.updateBabelConfig(cfg => {
        const pluginComponent = ['component', {
          'libraryName': 'element-ui',
          'styleLibraryName': 'theme-chalk'
        }]
        cfg.plugins = cfg.plugins || []
        cfg.plugins.push(pluginComponent)
        return cfg
      })
    }
  })
}
