const horizontalBar = require('../chart_component/bar/horizontal_one_bar')
const getImgDigital = require('../common_component/digital/img_digital')
const getImgProgressBar = require('../common_component/progress_bar/img_progress_bar')
const gridSingleLine = require('./deep_single_line')
const radarDigital = require('../common_component/digital/radar_digital')
const getCubeBar = require('../chart_component/pictorial_bar/pictorial_cube_bar')
const subtitle = require('../common_component/title/subtitle')
const legendPie = require('../chart_component/pie/legend_value')
const getImg = require('../common_component/single_img')

const config = legendPie([50, 22], 'cleanType')
config.children[0].props.$option.title = {
  ...config.children[0].props.$option.title,
  text: '洗车方式',
  subtext: '',
  $left: 106,
  $top: 104,
  textStyle: {
    ...config.children[0].props.$option.title.textStyle,
    $fontSize: 'variables.defaultFontSize',
    $letterSpacing: 3.2
  }
}

module.exports = function getLeftPart(position) {
  return {
    component: 'div',
    position: [position[0], position[1]],
    props: {
      class: 'left-part animate__animated animate__fadeInLeft',
    },
    children: [
      {
        component: 'div',
        props: {
          class: 'left-part__special',
        },
        children: [
          subtitle('提升片区特色'),
          {
            component: 'div',
            props: {
              class: 'left-part__special__body',
            },
            children: [
              {
                component: 'div',
                props: {
                  class: 'left-part__special__body__icon-digital',
                },
                children: [
                  {
                    component: 'icon-digital',
                    'vfor': {
                      data: 'craneStates.specialDigital',
                      exports: {
                        item: 'item',
                        index: 'index',
                        key: 'item + index',
                      },
                    },
                    props: {
                      $content: `item`,
                      $icon: 'item.icon',
                      $style: {
                        display: 'flex',
                        justifyContent: 'flex-start',
                      }
                    }
                  }
                ]
              },
              {
                id: "bubble",
                component: 'div',
                props: {
                  class: 'bubble-graph left-part__special__body__pop',
                },
                children: [
                  {
                    component: 'div',
                    id: 'circle',
                    vfor: {
                      data: 'keyPersonnel',
                      exports: { item: 'item', index: 'index', key: 'index' }
                    },
                    props: {
                      class: 'bubble-graph__item',
                      $style: {
                        $width: "item.width",
                        $height: "item.height",
                        $lineHeight: 1,
                        $boxShadow: "`inset 0 0 2.8rem ${item.shadowColor}`"
                      }
                    },
                    children: [
                      {
                        component: 'div',
                        content: "{{item.value}}",
                        props: {
                          class: 'bubble-graph__item__value'
                        }
                      },
                      {
                        component: 'div',
                        content: "{{item.name}}",
                        props: {
                          class: 'bubble-graph__item__title'
                        }
                      }
                    ]
                  },
                ]
              },
            ]
          },
        ]
      },
      {
        component: 'div',
        props: {
          class: 'left-part__pollute',
        },
        children: [
          subtitle('污染治理'),
          {
            component: 'div',
            props: {
              class: 'clean-station',
            },
            children: [
              {
                component: 'div',
                props: {
                  class: 'pie-bg-box'
                },
                children: [
                  getImg(null, [13.5,13.5], 'pie_bg.svg', 'pie-bg'),
                ]
              },
              {
                component: 'div',
                props: {
                  class: 'pie-bg-box'
                },
                children: [
                  getImg(null, [12.8,12.8], 'pie_inner_line.svg', 'pie-inner-line'),
                ]
              },
              {
                component: 'div',
                props: {
                  class: 'pie-bg-box'
                },
                children: [
                  getImg(null, [22,22], 'pie_outline.svg', 'pie-outline'),
                ]
              },
              legendPie([50, 22], 'polluteManage')
            ]
          },
          {
            component: 'div',
            props: {
              class: 'clean-type',
            },
            children: [
              {
                component: 'div',
                props: {
                  class: 'pie-bg-box'
                },
                children: [
                  getImg(null, [13.5,13.5], 'pie_bg.svg', 'pie-bg'),
                ]
              },
              {
                component: 'div',
                props: {
                  class: 'pie-bg-box'
                },
                children: [
                  getImg(null, [12.8,12.8], 'pie_inner_line.svg', 'pie-inner-line'),
                ]
              },
              {
                component: 'div',
                props: {
                  class: 'pie-bg-box'
                },
                children: [
                  getImg(null, [22,22], 'pie_outline.svg', 'pie-outline'),
                ]
              },
              config
            ]
          },
          {
            component: 'div',
            props: {
              class: 'clean-area',
            },
            children: [
              {
                component: 'div',
                props: {
                  class: 'clean-area__digital',
                },
                children: [
                  getImgDigital([19.3, 19], 'areaCount', 'clean-area__body', 'digitalBgBlue'),
                ]
              },
              {
                component: 'div',
                props: {
                  class: 'clean-area__line',
                },
                children: [
                  gridSingleLine([26, 20], 'areaCountLine')
                ]
              },
            ]
          },
        ]
      },
    ]
  }
}