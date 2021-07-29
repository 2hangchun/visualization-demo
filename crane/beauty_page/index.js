const left = require('./left_part')
const right = require('./right_part')

module.exports = {
  route: {
    name: 'beauty_page',
    path: 'beauty'
  },
  title: '平安',
  states: [],
  components: [
    left([24, 32]),
    // right([2104, 32]),
  ]
}
