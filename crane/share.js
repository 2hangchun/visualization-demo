const fontNormalOption = {
  $fontFamily: 'variables.defaultFont',
  $fontWeight: 400,
}

exports.digitalStyle = {
  fontFamily: 'ShiShangJianTi',
  fontSize: '2.4rem',
  lineHeight: '2.4rem',
  color: '#008AFF',
  fontWeight: 'normal',
  letterSpacing: '0.2rem',
}

exports.titleStyle= {
  fontFamily: 'ShiShangJianTi',
  lineHeight: '1.4rem',
  fontSize: '1.6rem',
  color: '#fff',
}

exports.suffixStyle = {
  fontFamily: 'ShiShangJianTi',
  lineHeight: '1.2rem',
  fontSize: '1.2rem',
  color: '#FFFFFF',
}

exports.xAxis = {
  type: 'category',
  $axisLabel:{
    $show: true,
    $fontSize: 'variables.xAxisLabelSize',
    $fontWeight: 400,
    $fontFamily: 'variables.defaultFont',
    $color: 'variables.xAxisLabelColor',
  },
  $axisLine: {
    $show: false,
    lineStyle: {
      $color: 'variables.xAxisLineColor',
    }
  },
  $axisTick: {
    $show: false
  },
  $splitLine: {
    $show: false
  }
}

exports.yAxis = {
  $axisLabel:{
    $show: true,
    $fontSize: 'variables.yAxisLabelSize',
    $fontWeight: 400,
    $fontFamily: 'variables.defaultFont',
    $color: 'variables.yAxisLabelColor',
  },
  $axisTick: {
    $show: false
  },
  $axisLine:{
    $show: false
  },
  $splitLine: {
    $show: false
  },
  $splitNumber: 4,
}

exports.legend = {
  $show: true,
  $right: 0,
  $top: 0,
  $itemWidth: 14,
  $itemHeight: 14,
  $itemGap: 28,
  textStyle: {
    $color: 'variables.legendLabelColor',
    $fontSize: 'variables.defaultFontSize',
    ...fontNormalOption
  }
}

exports.pieLegend = {
  orient: 'horizontal',
  top: 'center',
  $left: 300,
  $itemWidth: 12,
  $itemHeight: 12,
  $itemGap: 18,
  textStyle: {
    align: 'left',
    verticalAlign: 'middle',
    color: 'rgba(255,255,255,1)',
    $fontSize: 'variables.defaultFont',
    rich: {
      name: {
        color: 'rgba(255,255,255,1)',
        $fontSize: 'variables.defaultFontSize',
        ...fontNormalOption
      },
      value: {
        color: 'rgba(255,255,255,1)',
        $fontSize: 20,
        ...fontNormalOption
      },
    },
  },
}


exports.chartTitle = {
  left: 'left',
  top: 'top',
  textStyle: {
    $color: 'variables.chartTitle',
    $fontSize: 'variables.subtitleFontsSize',
    ...fontNormalOption,
  }
}

exports.barGrid = {
  $top: 34,
  $bottom: 0,
  $left: 6,
  $right: 6,
  $containLabel: true
}

exports.tooltip = {
  trigger: 'axis',
  axisPointer: {
    type: 'shadow',
    shadowStyle: {
      color: 'rgba(42, 253, 254, 0.15)',
    },
  },
  backgroundColor: 'rgba(8, 16, 26, 0.88)',
  $borderColor: 'variables.mainBlue',
  $borderWidth: 0.5,
  textStyle: {
    $color: 'variables.mainWhite',
    $fontSize: 'variables.defaultFontSize',
    ...fontNormalOption
  }
}

exports.dataZoom = {
  type: 'slider',
  $show: false,
  orient: 'vertical',
  $start: 'craneStates.horizontalBarLineDataStart',
  $end: 'craneStates.horizontalBarLineDataEnd',
}

exports.visualMap = {
  $show: false,
  type: 'piecewise',
}

exports.pieTitle = {
  textAlign: 'center',
  textVerticalAlign: 'middle',
  $itemGap: 0,
  textStyle: {
    ...fontNormalOption,
    $fontSize: 30,
    color: '#fff'
  },
  subtextStyle: {
    ...fontNormalOption,
    $fontSize:14,
    color: 'rgba(255,255,255,.7)',
  }
}
