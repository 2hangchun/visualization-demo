<template>
  <div class="main_page">
    <div class="container" :style="{width: '1920px', height: '1080px', display: 'flex', flexDirection: 'column'}">
      <div class="container__top" :style="{height: '78px', width: '1920px', display: 'flex', justifyContent: 'center'}">
        <div :style="{width: '500px', height: '36px', fontSize: '36px', fontWeight: '600', lineHeight: '36px', color: '#fff', textAlign: 'center', marginTop: '23px', letterSpacing: '1'}">
          园区经济资源可视化
        </div>
      </div>
      <div class="container__bottom" :style="{width: '1820px', height: '868px', margin: '63px 0 0 50px', display: 'flex', flexWrap: 'wrap', alignContent: 'space-between'}">
        <div class="container__bottom__left-top" :style="{width: '764px', height: '414px', display: 'flex', flexDirection: 'column'}">
          <div class="container__bottom__left-top__top" :style="{width: '720px', height: '30px', margin: '32px 0 0 22px'}">
            <div :style="{fontSize: '18px', color: '#0071fe', fontWeight: '500', letterSpacing: '0.5', margin: '1px 0 0 4px'}">
              经济指标
            </div>
          </div>
          <div class="container__bottom__left-top__bottom" :style="{width: '713px', height: '247px', margin: '50px 0 0 23px', display: 'flex', justifyContent: 'space-between'}">
            <div class="container__bottom__left-top__bottom__left" :style="{width: '282px', height: '207px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}">
              <div class="container__bottom__left-top__bottom__left__first" :style="{width: '282px', height: '70px', display: 'flex', justifyContent: 'space-between'}">
                <div class="container__bottom__left-top__bottom__left__first__left" :style="{width: '66px', height: '66px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '4px', borderRadius: '50%', backgroundColor: '#19284b'}">
                  <img :style="{width: '30px', height: '30px'}" src="../../public/demo/image/Icon-Currency.svg" alt="pic" />
                </div>
                <div class="container__bottom__left-top__bottom__left__first__right" :style="{width: '200px', height: '70px'}">
                  <div>
                    <span :style="{display: 'inline-block', color: '#fff', fontSize: '22px', fontWeight: '500'}">
                      ￥
                    </span>
                    <span :style="{display: 'inline-block', color: '#dece84', fontSize: '40px', fontWeight: '400', letterSpacing: '1'}">
                      360.00
                    </span>
                    <span :style="{display: 'inline-block', color: '#8f919f', fontSize: '14px', fontWeight: '500'}">
                      亿元
                    </span>
                  </div>
                  <div :style="{color: '#fff', fontSize: '14px', fontWeight: '500', marginTop: '-9px'}">
                    园区总产值
                  </div>
                </div>
              </div>
              <div class="container__bottom__left-top__bottom__left__second" :style="{width: '282px', height: '70px', display: 'flex', justifyContent: 'space-between'}">
                <div class="container__bottom__left-top__bottom__left__second__left" :style="{width: '66px', height: '66px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '4px', borderRadius: '50%', backgroundColor: '#19284b'}">
                  <img :style="{width: '30px', height: '30px'}" src="../../public/demo/image/Icon-Money.svg" alt="pic" />
                </div>
                <div class="container__bottom__left-top__bottom__left__second__right" :style="{width: '200px', height: '70px'}">
                  <div>
                    <span :style="{display: 'inline-block', color: '#fff', fontSize: '22px', fontWeight: '500'}">
                      ￥
                    </span>
                    <span :style="{display: 'inline-block', color: '#dece84', fontSize: '40px', fontWeight: '400', letterSpacing: '1'}">
                      73.30
                    </span>
                    <span :style="{display: 'inline-block', color: '#8f919f', fontSize: '14px', fontWeight: '500'}">
                      亿元
                    </span>
                  </div>
                  <div :style="{color: '#fff', fontSize: '14px', fontWeight: '500', marginTop: '-9px'}">
                    园区总投资
                  </div>
                </div>
              </div>
            </div>
            <div class="container__bottom__left-top__bottom__right" :style="{width: '398px', height: '247px', border: '1px solid red'}" />
          </div>
        </div>
        <div class="container__bottom__right-top" :style="{width: '1018px', height: '414px', marginLeft: '34px', display: 'flex', flexDirection: 'column'}">
          <div class="container__bottom__right-top__top" :style="{width: '976px', height: '30px', margin: '32px 0 0 22px'}">
            <div :style="{fontSize: '18px', color: '#0071fe', fontWeight: '500', letterSpacing: '0.5', margin: '1px 0 0 4px'}">
              科技成果
            </div>
          </div>
          <div class="container__bottom__right-top__bottom" :style="{width: '991px', height: '308px', margin: '21px 0 0 23px', display: 'flex'}">
            <div class="container__bottom__right-top__bottom__first" :style="{width: '240px', height: '308px', display: 'flex', flexDirection: 'column'}">
              <div class="container__bottom__right-top__bottom__first__first" :style="{height: '75px', width: '222px', marginTop: '25px', display: 'flex', justifyContent: 'space-between'}">
                <div class="container__bottom__right-top__bottom__first__first__left" :style="{width: '66px', height: '66px', marginTop: '3px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', backgroundColor: '#19284b'}">
                  <img :style="{width: '30px', height: '30px'}" src="../../public/demo/image/Icon-Currency.svg" alt="pic" />
                </div>
                <div class="container__bottom__right-top__bottom__first__first__right" :style="{width: '140px', height: '75px'}">
                  <div>
                    <span :style="{display: 'inline-block', color: '#dece84', fontSize: '40px', fontWeight: '400', letterSpacing: '1'}">
                      1,948
                    </span>
                    <span :style="{display: 'inline-block', color: '#8f919f', fontSize: '14px', fontWeight: '500', paddingLeft: '8px'}">
                      个
                    </span>
                  </div>
                  <div :style="{color: '#fff', fontSize: '14px', fontWeight: '500', marginTop: '-4px'}">
                    技术成果
                  </div>
                </div>
              </div>
              <div class="container__bottom__right-top__bottom__first__second" :style="{height: '46px', width: '192px', marginTop: '29px', marginLeft: '15px', display: 'flex', justifyContent: 'space-between'}">
                <div class="container__bottom__right-top__bottom__first__second__left" :style="{width: '36px', height: '36px', marginTop: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', backgroundColor: '#19284b'}">
                  <img :style="{width: '14px', height: '14px'}" src="../../public/demo/image/Icon-Book.svg" alt="pic" />
                </div>
                <div class="container__bottom__right-top__bottom__first__second__right" :style="{width: '140px', height: '46px'}">
                  <div>
                    <span :style="{display: 'inline-block', color: '#dece84', fontSize: '20px', fontWeight: '400', letterSpacing: '1'}">
                      670
                    </span>
                    <span :style="{display: 'inline-block', color: '#8f919f', fontSize: '14px', fontWeight: '500', paddingLeft: '8px'}">
                      个
                    </span>
                  </div>
                  <div :style="{color: '#fff', fontSize: '12px', fontWeight: '500', marginTop: '-4px'}">
                    基础理论成果
                  </div>
                </div>
              </div>
              <div class="container__bottom__right-top__bottom__first__third" :style="{height: '46px', width: '192px', marginTop: '16px', marginLeft: '15px', display: 'flex', justifyContent: 'space-between'}">
                <div class="container__bottom__right-top__bottom__first__third__left" :style="{width: '36px', height: '36px', marginTop: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', backgroundColor: '#19284b'}">
                  <img :style="{width: '14px', height: '14px'}" src="../../public/demo/image/Icon-Application.svg" alt="pic" />
                </div>
                <div class="container__bottom__right-top__bottom__first__third__right" :style="{width: '140px', height: '46px'}">
                  <div>
                    <span :style="{display: 'inline-block', color: '#dece84', fontSize: '20px', fontWeight: '400', letterSpacing: '1'}">
                      800
                    </span>
                    <span :style="{display: 'inline-block', color: '#8f919f', fontSize: '14px', fontWeight: '500', paddingLeft: '8px'}">
                      个
                    </span>
                  </div>
                  <div :style="{color: '#fff', fontSize: '12px', fontWeight: '500', marginTop: '-4px'}">
                    应用技术成果
                  </div>
                </div>
              </div>
              <div class="container__bottom__right-top__bottom__first__forth" :style="{height: '46px', width: '192px', marginTop: '16px', marginLeft: '15px', display: 'flex', justifyContent: 'space-between'}">
                <div class="container__bottom__right-top__bottom__first__forth__left" :style="{width: '36px', height: '36px', marginTop: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', backgroundColor: '#19284b'}">
                  <img :style="{width: '14px', height: '14px'}" src="../../public/demo/image/Icon-Rocket.svg" alt="pic" />
                </div>
                <div class="container__bottom__right-top__bottom__first__forth__right" :style="{width: '140px', height: '46px'}">
                  <div>
                    <span :style="{display: 'inline-block', color: '#dece84', fontSize: '20px', fontWeight: '400', letterSpacing: '1'}">
                      478
                    </span>
                    <span :style="{display: 'inline-block', color: '#8f919f', fontSize: '14px', fontWeight: '500', paddingLeft: '8px'}">
                      个
                    </span>
                  </div>
                  <div :style="{color: '#fff', fontSize: '12px', fontWeight: '500', marginTop: '-4px'}">
                    软科学成果
                  </div>
                </div>
              </div>
            </div>
            <div class="container__bottom__right-top__bottom__second" :style="{width: '358px', height: '308px'}">
              <v-chart :option="{legend: {
                                                                            show: true,
                                                                            type: 'plain',
                                                                            bottom: 0,
                                                                            icon:'circle',
                                                                            textStyle:{
                                                                                color:'#fff',
                                                                                fontSize:'14px'
                                                                            }
                                                                        }, tooltip: {
                                                                            show: true,
                                                                        }, grid: {
                                                                            width: '310px',
                                                                            height: '175px',
                                                                            top: '35px',
                                                                            left: '40px'
                                                                        }, xAxis: {
                                                                            type: 'category',
                                                                            data: ['基础理论成果', '应用技术成果', '软科学成果'],
                                                                            axisLabel: {
                                                                                show: true,
                                                                                rotate: 45,
                                                                                color: '#5992d1',
                                                                                fontSize: '14px'
                                                                            },
                                                                            axisLine: {
                                                                                lineStyle: {
                                                                                    color: '#0650a7'
                                                                                }
                                                                            },
                                                                            axisTick: {
                                                                                show: true,
                                                                            },
                                                                        }, yAxis: {
                                                                            type: 'value',
                                                                            show: true,
                                                                            name: '个',
                                                                            nameTextStyle: {
                                                                                color: '#5992d1',
                                                                                fontSize: '14px',
                                                                                // align:'right',
                                                                                padding: [0, 40, 0, 0],
                                                                                verticalAlign: 'middle'
                                                                            },
                                                                            nameGap: 20,
                                                                            axisLine: {
                                                                                show: true,
                                                                                lineStyle: {
                                                                                    color: '#0650a7'
                                                                                }
                                                                            },
                                                                            axisLabel: {
                                                                                color: '#5992d1',
                                                                                fontSize: '14px',
                                                                                margin: 10
                                                                            },
                                                                            axisTick: {
                                                                                show: true
                                                                            },
                                                                            splitLine: {
                                                                                show: false
                                                                            }
                                                                        }, series: [
                                                                            {
                                                                                type: 'bar',
                                                                                name: '2017',
                                                                                data: [450, 400, 500],
                                                                                barGap: 0,
                                                                                barWidth: '20px',
                                                                                itemStyle: {
                                                                                    color: {
                                                                                        type: 'linear',
                                                                                        x: 0,
                                                                                        y: 0,
                                                                                        x2: 0,
                                                                                        y2: 1,
                                                                                        colorStops: [
                                                                                            {
                                                                                                offset: 0,
                                                                                                color: '#157df9'
                                                                                            },
                                                                                            {
                                                                                                offset: 1,
                                                                                                color: '#1257ab',
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                type: 'bar',
                                                                                name: '2018',
                                                                                data: [800, 700, 600],
                                                                                barGap: 0,
                                                                                barWidth: '20px',
                                                                                itemStyle: {
                                                                                    color: {
                                                                                        type: 'linear',
                                                                                        x: 0,
                                                                                        y: 0,
                                                                                        x2: 0,
                                                                                        y2: 1,
                                                                                        colorStops: [
                                                                                            {
                                                                                                offset: 0,
                                                                                                color: '#dbcb87'
                                                                                            },
                                                                                            {
                                                                                                offset: 1,
                                                                                                color: '#908867',
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                }
                                                                            }
                                                                        ]}" />
            </div>
            <div class="container__bottom__right-top__bottom__third" :style="{width: '389px', height: '308px'}">
              <v-chart @mouseover="($event)=>[fn3($event)]" @mouseout="($event)=>[fn4($event)]" ref="chart2" :option="{tooltip: {
                                                                    show:true,
                                                                    backgroundColor:'rgba(50,50,50,0.7)',
                                                                    textStyle:{
                                                                    color:'#fff',
                                                                    },
                                                                    formatter:f4
                                                                }, color: ['#007afe','#dece84','#8f919f','#2dc4b6','#f7b26f','#3fa7d6'], series: {
                                                                            data:data2,
                                                                            type:'pie',
                                                                            label:{
                                                                                show:true,
                                                                                align:'left',
                                                                                textStyle:{
                                                                                    color:'#fff',
                                                                                    fontSize:'12px',
                                                                                },
                                                                                formatter:f5
                                                                            },
                                                                            labelLine:{
                                                                                lineStyle:{
                                                                                    color:'#0650a7',
                                                                                    width:1
                                                                                }
                                                                            },
                                                                            emphasis:{
                                                                                scale:false
                                                                            },
                                                                            selectedMode:'single',
                                                                            radius:[0,'50%']
                                                                        }}" />
            </div>
          </div>
        </div>
        <div class="container__bottom__left-bottom" :style="{width: '1018px', height: '414px', display: 'flex', flexDirection: 'column'}">
          <div class="container__bottom__left-bottom__top" :style="{width: '976px', height: '30px', margin: '32px 0 0 22px'}">
            <div :style="{fontSize: '18px', color: '#0071fe', fontWeight: '500', letterSpacing: '0.5', margin: '1px 0 0 4px'}">
              项目申报
            </div>
          </div>
          <div class="container__bottom__left-bottom__bottom" :style="{width: '958px', height: '274px', margin: '52px 0 0 30px', display: 'flex'}">
            <div class="container__bottom__left-bottom__bottom__left" :style="{width: '261px', height: '218px', marginTop: '5px'}">
              <div class="container__bottom__left-bottom__bottom__left__top" :style="{width: '221px', height: '75px', display: 'flex', justifyContent: 'space-between'}">
                <div :style="{width: '66px', height: '66px', marginTop: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', backgroundColor: '#19284b'}">
                  <img :style="{width: '30px', height: '30px'}" src="../../public/demo/image/Icon-Project02.svg" alt="pic" />
                </div>
                <div :style="{width: '140px', height: '75px'}">
                  <div>
                    <span :style="{display: 'inline-block', color: '#dece84', fontSize: '40px', fontWeight: '400', letterSpacing: '1'}">
                      423
                    </span>
                    <span :style="{display: 'inline-block', color: '#8f919f', fontSize: '14px', fontWeight: '500', paddingLeft: '8px'}">
                      个
                    </span>
                  </div>
                  <div :style="{color: '#fff', fontSize: '14px', fontWeight: '500'}">
                    申报数量
                  </div>
                </div>
              </div>
              <div class="container__bottom__left-bottom__bottom__left__middle" :style="{width: '261px', height: '46px', marginTop: '34px', display: 'flex', justifyContent: 'space-between'}">
                <div class="container__bottom__left-bottom__bottom__left__middle__left" :style="{width: '143px', height: '46px', display: 'flex', justifyContent: 'space-between'}">
                  <div class="container__bottom__left-bottom__bottom__left__middle__left__left" :style="{width: '36px', height: '36px', marginTop: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', backgroundColor: '#19284b'}">
                    <img :style="{width: '14px', height: '14px'}" src="../../public/demo/image/Icon-Project.svg" alt="pic" />
                  </div>
                  <div class="container__bottom__left-bottom__bottom__left__middle__left__right" :style="{width: '100px', height: '46px'}">
                    <div>
                      <span :style="{display: 'inline-block', color: '#dece84', fontSize: '20px', fontWeight: '400', letterSpacing: '1'}">
                        170
                      </span>
                      <span :style="{display: 'inline-block', color: '#8f919f', fontSize: '14px', fontWeight: '500', paddingLeft: '8px'}">
                        个
                      </span>
                    </div>
                    <div :style="{color: '#fff', fontSize: '12px', fontWeight: '500'}">
                      国家发改委项目
                    </div>
                  </div>
                </div>
                <div class="container__bottom__left-bottom__bottom__left__middle__right" :style="{width: '112px', height: '46px', display: 'flex', justifyContent: 'space-between'}">
                  <div class="container__bottom__left-bottom__bottom__left__middle__right__left" :style="{width: '36px', height: '36px', marginTop: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', backgroundColor: '#19284b'}">
                    <img :style="{width: '14px', height: '14px'}" src="../../public/demo/image/Icon-Tech.svg" alt="pic" />
                  </div>
                  <div class="container__bottom__left-bottom__bottom__left__middle__right__right" :style="{width: '70px', height: '46px'}">
                    <div>
                      <span :style="{display: 'inline-block', color: '#dece84', fontSize: '20px', fontWeight: '400', letterSpacing: '1'}">
                        115
                      </span>
                      <span :style="{display: 'inline-block', color: '#8f919f', fontSize: '14px', fontWeight: '500', paddingLeft: '8px'}">
                        个
                      </span>
                    </div>
                    <div :style="{color: '#fff', fontSize: '12px', fontWeight: '500'}">
                      科技部项目
                    </div>
                  </div>
                </div>
              </div>
              <div class="container__bottom__left-bottom__bottom__left__bottom" :style="{width: '261px', height: '46px', marginTop: '17px', display: 'flex', justifyContent: 'space-between'}">
                <div class="container__bottom__left-bottom__bottom__left__bottom__left" :style="{width: '143px', height: '46px', display: 'flex', justifyContent: 'space-between'}">
                  <div class="container__bottom__left-bottom__bottom__left__bottom__left__left" :style="{width: '36px', height: '36px', marginTop: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', backgroundColor: '#19284b'}">
                    <img :style="{width: '14px', height: '14px'}" src="../../public/demo/image/Icon-Sort.svg" alt="pic" />
                  </div>
                  <div class="container__bottom__left-bottom__bottom__left__bottom__left__right" :style="{width: '100px', height: '46px'}">
                    <div>
                      <span :style="{display: 'inline-block', color: '#dece84', fontSize: '20px', fontWeight: '400', letterSpacing: '1'}">
                        108
                      </span>
                      <span :style="{display: 'inline-block', color: '#8f919f', fontSize: '14px', fontWeight: '500', paddingLeft: '8px'}">
                        个
                      </span>
                    </div>
                    <div :style="{color: '#fff', fontSize: '12px', fontWeight: '500'}">
                      软件著作
                    </div>
                  </div>
                </div>
                <div class="container__bottom__left-bottom__bottom__left__bottom__right" :style="{width: '112px', height: '46px', display: 'flex', justifyContent: 'space-between'}">
                  <div class="container__bottom__left-bottom__bottom__left__bottom__right__left" :style="{width: '36px', height: '36px', marginTop: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', backgroundColor: '#19284b'}">
                    <img :style="{width: '14px', height: '14px'}" src="../../public/demo/image/Icon-Sapling.svg" alt="pic" />
                  </div>
                  <div class="container__bottom__left-bottom__bottom__left__bottom__right__right" :style="{width: '70px', height: '46px'}">
                    <div>
                      <span :style="{display: 'inline-block', color: '#dece84', fontSize: '20px', fontWeight: '400', letterSpacing: '1'}">
                        90
                      </span>
                      <span :style="{display: 'inline-block', color: '#8f919f', fontSize: '14px', fontWeight: '500', paddingLeft: '8px'}">
                        个
                      </span>
                    </div>
                    <div :style="{color: '#fff', fontSize: '12px', fontWeight: '500'}">
                      农业部项目
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container__bottom__left-bottom__bottom__middle" :style="{width: '230px', height: '222px', marginTop: '2px', marginLeft: '40px'}">
              <div class="container__bottom__left-bottom__bottom__middle__top" :style="{width: '230px', height: '206px'}">
                <v-chart :option="{tooltip: {show: 'true', trigger: 'item'}, series: [
                                                                                      {
                                                                                          type: 'pie',
                                                                                          radius: ['68%', '78%'],
                                                                                          avoidLabelOverlap: false,
                                                                                          hoverAnimation: false,
                                                                                          labelLine: {
                                                                                              show: false
                                                                                          },
                                                                                          data: [
                                                                                              {
                                                                                                  value: 75.4,
                                                                                                  label: {
                                                                                                      show: true,
                                                                                                      position: 'center',
                                                                                                      fontSize: 30,
                                                                                                      fontWeight: 400,
                                                                                                      formatter: '{d}%',
                                                                                                      color: '#fff'
                                                                                                  },
                                                                                                  tooltip: {
                                                                                                      backgroundColor: 'rgba(50,50,50,.9)',
                                                                                                      textStyle: {
                                                                                                          color: '#fff'
                                                                                                      },
                                                                                                      formatter:f1,
                                                                                                      position:p1
                                                                                                  },
                                                                                                  itemStyle: {
                                                                                                      color: '#007afe'
                                                                                                  },
                                                                                                  emphasis: {
                                                                                                      scale: true,
                                                                                                      scaleSize: 3,
                                                                                                  }
                                                                                              },
                                                                                              {
                                                                                                  value: 24.6,
                                                                                                  itemStyle: {
                                                                                                      color: '#007afe',
                                                                                                      opacity: 0.1
                                                                                                  },
                                                                                                  tooltip: {
                                                                                                      show: false
                                                                                                  }
                                                                                              },
              
                                                                                          ]
                                                                                      }
                                                                                  ]}" />
              </div>
              <div class="container__bottom__left-bottom__bottom__middle__bottom" :style="{width: '230px', height: '16px', color: '#fff', fontSize: '16px', fontWeight: '400', textAlign: 'center'}">
                年度申报成功率
              </div>
            </div>
            <div class="container__bottom__left-bottom__bottom__right" :style="{width: '372px', height: '274px', marginLeft: '55px'}">
              <v-chart :option="{legend: {
                                                                            show: true,
                                                                            type: 'plain',
                                                                            bottom: 0,
                                                                            icon:'circle',
                                                                            textStyle:{
                                                                                color:'#fff',
                                                                                fontSize:'14px'
                                                                            }
                                                                        }, grid: {
                                                                            width:'250px',
                                                                            height:'210px',
                                                                            top:3,
                                                                            right:20
                                                                        }, tooltip: {
                                                                            show: true,
                                                                        }, yAxis: {
                                                                            type: 'category',
                                                                            data: ['医药制造','家具制造','通用设备制造','纺织','计算机制造','电气机械制造'],
                                                                            axisLabel: {
                                                                                show: true,
                                                                                color: '#5992d1',
                                                                                fontSize: '15px',
                                                                                interval: 0
                                                                            },
                                                                            axisLine: {
                                                                                show:false
                                                                            },
                                                                            axisTick: {
                                                                                show: false,
                                                                            },
                                                                        }, xAxis: {
                                                                            type: 'value',
                                                                            show: true,
                                                                            axisLine: {
                                                                                show: false,
                                                                            },
                                                                            axisLabel: {
                                                                                color: '#5992d1',
                                                                                fontSize: '15px',
                                                                            },
                                                                            axisTick: {
                                                                                show: false
                                                                            },
                                                                            splitLine: {
                                                                                show: false
                                                                            }
                                                                        }, series: [
                                                                            {
                                                                                type: 'bar',
                                                                                name: '2017',
                                                                                data: [65,76,52,95,50,80],
                                                                                barWidth: '10px',
                                                                                itemStyle: {
                                                                                    color: {
                                                                                        type: 'linear',
                                                                                        x: 0,
                                                                                        y: 0,
                                                                                        x2: 1,
                                                                                        y2: 0,
                                                                                        colorStops: [
                                                                                            {
                                                                                                offset: 0,
                                                                                                color: '#1257ab'
                                                                                            },
                                                                                            {
                                                                                                offset: 1,
                                                                                                color: '#157df9',
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                type: 'bar',
                                                                                name: '2018',
                                                                                data: [83,70,90,86,94,97],
                                                                                barGap: 0,
                                                                                barWidth: '10px',
                                                                                itemStyle: {
                                                                                    color: {
                                                                                        type: 'linear',
                                                                                        x: 0,
                                                                                        y: 0,
                                                                                        x2: 1,
                                                                                        y2: 0,
                                                                                        colorStops: [
                                                                                            {
                                                                                                offset: 0,
                                                                                                color: '#908867'
                                                                                            },
                                                                                            {
                                                                                                offset: 1,
                                                                                                color: '#dbcb87',
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                }
                                                                            }
                                                                        ]}" />
            </div>
          </div>
        </div>
        <div class="container__bottom__right-bottom" :style="{width: '764px', height: '414px', marginLeft: '34px', display: 'flex', flexDirection: 'column'}">
          <div class="container__bottom__right-bottom__top" :style="{width: '722px', height: '30px', margin: '32px 0 0 22px'}">
            <div :style="{fontSize: '18px', color: '#0071fe', fontWeight: '500', letterSpacing: '0.5', margin: '1px 0 0 4px'}">
              经济产出行业对比
            </div>
          </div>
          <div class="container__bottom__right-bottom__bottom" :style="{width: '670px', height: '340px', margin: '7px 0 0 22px'}">
            <v-chart @mouseover="($event)=>[fn1($event)]" @mouseout="($event)=>[fn2($event)]" ref="chart1" :option="{title: {
                                                                  text: '经济产出占比',
                                                                  left:'24%',
                                                                  top:'center',
                                                                  textStyle:{
                                                                      fontSize:'18px',
                                                                      fontWeight:400,
                                                                      color:'#fff',
                                                                      lineHeight:1.4,
                                                                      textAlign:'center'
                                                                  }
                                                              }, legend: {
                                                                  type: 'plain',
                                                                  icon: 'circle',
                                                                  orient: 'vertical',
                                                                  right: 10,
                                                                  top: '20%',
                                                                  align: 'left',
                                                                  itemGap: 20,
                                                                  textStyle:{
                                                                      color:'#fff',
                                                                      fontSize:'16px',
                                                                      fontWeight:400
                                                                  },
                                                                  formatter:f3
                                                              }, tooltip: {
                                                                  show:true,
                                                                  backgroundColor:'rgba(50,50,50,0.7)',
                                                                  textStyle:{
                                                                  color:'#fff',
                                                                  },
                                                                  formatter:f2
                                                              }, color: ['#007afe','#dece84','#8f919f','#2dc4b6','#f7b26f','#3fa7d6'], series: {
                                                                  data:data1,
                                                                  type:'pie',
                                                                  label:{
                                                                      show:false,
                                                                  },
                                                                  center:['33%','50%'],
                                                                  emphasis:{
                                                                      scale:false
                                                                  },
                                                                  selectedMode:'single',
                                                                  radius:['42%','60%'],
                                                              }}" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BuiltInMixin from '../mixins/built_in'
import 'echarts'
import VChart from 'vue-echarts'

export const main_page = {
  mixins: [BuiltInMixin],

  components: {
    'v-chart': VChart
  },

  data () {
    return {
      craneStates: {},
      data1:[
        {
          name:'电气机械制造类企业',
          value:29,
        },
        {
          name:'计算机制造类企业',
          value:26,
        },
        {
          name:'纺织类企业',
          value:20,
        },
        {
          name:'通用设备制造类企业',
          value:12,
        },
        {
          name:'家具制造类企业',
          value:7,
        },
        {
          name:'医药制造类企业',
          value:6,
        },
      ],
      data2:[
        {
          name:'电气机械制造',
          value:29,
        },
        {
          name:'计算机制造',
          value:26,
        },
        {
          name:'纺织',
          value:20,
        },
        {
          name:'通用设备制造',
          value:12,
        },
        {
          name:'家具制造',
          value:7,
        },
        {
          name:'医药制造',
          value:6,
        },
      ]
    }
  },
  methods: {
    f1(params) {
      return `<span style="display:inline-block;border-radius:50%;width:10px;height:10px;background-color:${params.color}"></span> 年度申报成功率：75.4%`
    },
    p1(pos) {
      return pos.map(item => item + 20)
    },
    f2(params){
      const {marker,name,percent} = params
      return `${marker}${name}:${percent}%`
    },
    f3(params){
      return `${params} ${this.data1.find(item=>item.name===params).value}%`
    },
    fn1(params){
      const echartsInstance=this.$refs.chart1
      echartsInstance.dispatchAction({
        type:'select',
        seriesIndex:params.seriesIndex,
        name:params.name
      })
    },
    fn2(params){
      const echartsInstance=this.$refs.chart1
      echartsInstance.dispatchAction({
        type:'unselect',
        seriesIndex:params.seriesIndex,
        name:params.name
      })
    },
    f4(params){
      const {marker,name,percent} = params
      return `${marker}${name}:${percent}%`
    },
    f5(params){
      return params.percent+'%\n'+params.name
    },
    fn3(params){
      const echartsInstance=this.$refs.chart2
      echartsInstance.dispatchAction({
        type:'select',
        seriesIndex:params.seriesIndex,
        name:params.name
      })
    },
    fn4(params){
      const echartsInstance=this.$refs.chart2
      echartsInstance.dispatchAction({
        type:'unselect',
        seriesIndex:params.seriesIndex,
        name:params.name
      })
    },
  }
}
export default main_page
</script>

<style>
 .container {
   background: url("../../public/demo/image/economic-bg.png");
 }
 .container__top {
   background: url("../../public/demo/image/economic-titile01.png")
 }
 .container__bottom__left-top{
   background: url("../../public/demo/image/economic-box-S.png")
 }
 .container__bottom__left-top__top{
   background: url("../../public/demo/image/economic-titile02.png")
 }
 .container__bottom__right-top{
   background: url("../../public/demo/image/economic-box-L.png")
 }
 .container__bottom__right-top__top{
   background: url("../../public/demo/image/economic-titile03.png")
 }
 .container__bottom__left-bottom{
   background: url("../../public/demo/image/economic-box-L.png")
 }
 .container__bottom__left-bottom__top{
   background: url("../../public/demo/image/economic-titile03.png")
 }
 .container__bottom__right-bottom{
   background: url("../../public/demo/image/economic-box-S.png")
 }
 .container__bottom__right-bottom__top{
   background: url("../../public/demo/image/economic-titile02.png")
 }
</style>