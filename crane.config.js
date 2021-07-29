const main = require('./crane/main_page/index')

module.exports = {
  name: 'hezuo-lead-cockpit',
  size: [2688, 1440],
  requestSettings: {
    baseURL: '',
  },
  modules: {
    '@byzanteam/map-ui': {
      version: '../map-ui',
      style: {
        type: 'normal',
        path: 'dist/map-ui.css',
      },
    },
  },
  pages: [
    main
  ]
}
