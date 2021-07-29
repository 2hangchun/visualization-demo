const getProgressBar = require('../common_component/progress_bar/progress_bar_group')
const getImg = require('../common_component/single_img')
const radarDigital = require('../common_component/digital/radar_digital')
const getCubeBar = require('../chart_component/pictorial_bar/pictorial_cube_bar')
const singleLine = require('../chart_component/line/single_line')
const getLiquidBall = require('../chart_component/liquid/liquid_ball_big')
const getTwoBarConfig = require('../chart_component/bar/two_bar')
const subtitle = require('../common_component/title/subtitle')
const getChartTitle = require('../common_component/title/chart_title')
const getImgDigital = require('../common_component/digital/img_digital')

module.exports = function getRightPart(position) {
  return {
    component: 'div',
    position: [position[0], position[1]],
    props: {
      class: 'right-part animate__animated animate__fadeInRight',
    },
    children: [
      {
        component: 'div',
        props: {
          class: 'right-part__environment',
        },
        children: [
          subtitle('生态环境建设'),
          {
            component: 'div',
            props: {
              class: 'right-part__environment__problem-deal',
            },
            children: [
              getImgDigital([27.5, 21.5], 'problemDealRate', 'right-part__environment__problem-deal__body', 'problemDealRateImg'),
            ]
          },
          {
            component: 'div',
            props: {
              class: 'right-part__environment__waste-rate',
            },
            children: [
              getImgDigital([27.5, 21.5], 'wasteTypeRate', 'right-part__environment__waste-rate__body', 'problemDealRateImg'),
            ]
          },
          {
            component: 'div',
            props: {
              class: 'right-part__environment__waste-station',
            },
            children: [
              getImgDigital([24.7, 17.2], 'wasteStation', 'right-part__environment__waste-station__body', 'wasteStationImg'),
            ]
          },
          {
            component: 'div',
            props: {
              class: 'right-part__environment__waste-deal',
            },
            children: [
              getImgDigital([27.5, 21.5], 'wasteDealRate', 'right-part__environment__waste-deal__body', 'wasteDealRateImg'),
            ]
          }
        ]
      },
      {
        component: 'div',
        props: {
          class: 'right-part__air',
        },
        children: [
          subtitle('空气治理'),
          {
            component: 'div',
            props: {
              class: 'right-part__air__status',
            },
            children: [
              {
                component: 'div',
                props: {
                  class: 'AQI-box',
                },
                children: [
                  getImgDigital([24.3, 22], 'AQI', 'AQI-box__body', 'AQIImg'),
                ]
              },
              {
                component: 'div',
                props: {
                  class: 'air-total',
                },
                children: [
                  getImgDigital([24.3, 22], 'airTotal', 'air-total__body', 'airTotalImg'),
                ]
              },
            ]
          },
          {
            component: 'div',
            props: {
              class: 'right-part__air__line',
            },
            children: [
              {
                component: 'div',
                props: {
                  class: 'chart-title-box'
                },
                children: [
                  getChartTitle('当天PM2.5指数', '(ug/m³)')
                ]
              },
              singleLine([50.2, 16.9], 'airQualityLine')
            ]
          }
        ]
      }
    ]
  }
}
