const gridSingleLine = require('../chart_component/line/grid_single_line')

module.exports = function gridSingleLineDeep(wh, dataName) {
  const lineConfig = gridSingleLine(wh, dataName)
  lineConfig.children[0].props.$option = {
  ...lineConfig.children[0].props.$option,
  $xAxis: {
    ...lineConfig.children[0].props.$option.$xAxis,
    $splitLine: {
      $show: true,
      lineStyle: {
        $color: 'xAxisSplitLineColorDeep',
        type: 'dashed'
      }
    },
  },
  $yAxis: {
    ...lineConfig.children[0].props.$option.$yAxis,
    $splitLine: {
      lineStyle: {
        $color: 'yAxisSplitLineColorDeep',
        type: 'dashed'
      }
    }
  },
}
  return lineConfig
}
