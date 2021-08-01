module.exports = {
    route: {
        name: 'main_page',
        path: 'main'
    },
    title: '主要',
    states: [],
    components: [
        {
            component: 'div',
            props: {
                class: 'container',
                $style: {
                    width: '1920px',
                    height: '1080px',
                    display: 'flex',
                    flexDirection: 'column'
                }
            },
            children: [
                {
                    component: 'div',
                    props: {
                        class: 'container__top',
                        $style: {
                            height: '78px',
                            width: '1920px',
                            display: 'flex',
                            justifyContent: 'center',
                        }
                    },
                    children: [
                        {
                            component: 'div',
                            content: '园区经济资源可视化',
                            props: {
                                $style: {
                                    width: '500px',
                                    height: '36px',
                                    fontSize: '36px',
                                    fontWeight: '600',
                                    lineHeight: '36px',
                                    color: '#fff',
                                    textAlign: 'center',
                                    marginTop: '23px',
                                    letterSpacing: 1
                                }
                            }
                        },
                    ]
                },
                {
                    component: 'div',
                    props: {
                        class: 'container__bottom',
                        $style: {
                            width: '1820px',
                            height: '868px',
                            $margin: `'63px 0 0 50px'`,
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignContent: 'space-between',
                        }
                    },
                    children: [
                        {
                            component: 'div',
                            props: {
                                class: 'container__bottom__left-top',
                                $style: {
                                    width: '764px',
                                    height: '414px',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }
                            },
                            children: [
                                {
                                    component: 'div',
                                    props: {
                                        class: 'container__bottom__left-top__top',
                                        $style: {
                                            width: '720px',
                                            height: '30px',
                                            $margin: `'32px 0 0 22px'`
                                        }
                                    },
                                    children: [
                                        {
                                            component: 'div',
                                            content: '经济指标',
                                            props: {
                                                $style: {
                                                    fontSize: '18px',
                                                    color: '#0071fe',
                                                    fontWeight: 500,
                                                    letterSpacing: 0.5,
                                                    $margin: `'1px 0 0 4px'`
                                                }
                                            }
                                        },
                                    ]
                                },
                                {
                                    component: 'div',
                                    props: {
                                        class: 'container__bottom__left-top__bottom',
                                        $style: {
                                            width: '713px',
                                            height: '247px',
                                            margin: '50px 0 0 23px',
                                            display: 'flex',
                                            justifyContent: 'space-between'
                                        }
                                    },
                                    children: [
                                        {
                                            component: 'div',
                                            props: {
                                                class: 'container__bottom__left-top__bottom__left',
                                                $style: {
                                                    width: '282px',
                                                    height: '207px',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between'
                                                }
                                            },
                                            children: [
                                                {
                                                    component: 'div',
                                                    props: {
                                                        class: 'container__bottom__left-top__bottom__left__first',
                                                        $style: {
                                                            width: '282px',
                                                            height: '70px',
                                                            display: 'flex',
                                                            justifyContent: 'space-between'
                                                        }
                                                    },
                                                    children: [
                                                        {
                                                            component: 'div',
                                                            props: {
                                                                class: 'container__bottom__left-top__bottom__left__first__left',
                                                                $style: {
                                                                    width: '66px',
                                                                    height: '66px',
                                                                    display: 'flex',
                                                                    justifyContent: 'center',
                                                                    alignItems: 'center',
                                                                    marginTop: '4px',
                                                                    borderRadius: '50%',
                                                                    backgroundColor: '#19284b'
                                                                }
                                                            },
                                                            children: [
                                                                {
                                                                    component: 'img',
                                                                    props: {
                                                                        $style: {
                                                                            width: '30px',
                                                                            height: '30px',
                                                                        },
                                                                        src: '../../public/demo/image/Icon-Currency.svg',
                                                                        alt: 'pic'
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            component: 'div',
                                                            props: {
                                                                class: 'container__bottom__left-top__bottom__left__first__right',
                                                                $style: {
                                                                    width: '200px',
                                                                    height: '70px',
                                                                }
                                                            },
                                                            children: [
                                                                {
                                                                    component:'div',
                                                                    children: [
                                                                        {
                                                                            component: 'span',
                                                                            props:{
                                                                              $style:{
                                                                                  display: 'inline-block',
                                                                                  color:'#fff',
                                                                                  fontSize:'22px',
                                                                                  fontWeight:500
                                                                              }
                                                                            },
                                                                            content:'￥'
                                                                        },
                                                                        {
                                                                            component: 'span',
                                                                            props:{
                                                                              $style:{
                                                                                  display: 'inline-block',
                                                                                  color:'#dece84',
                                                                                  fontSize:'40px',
                                                                                  fontWeight:400,
                                                                                  letterSpacing:1
                                                                              }
                                                                            },
                                                                            content:'360.00'
                                                                        },
                                                                        {
                                                                            component: 'span',
                                                                            props:{
                                                                              $style:{
                                                                                  display: 'inline-block',
                                                                                  color:'#8f919f',
                                                                                  fontSize:'14px',
                                                                                  fontWeight:500
                                                                              }
                                                                            },
                                                                            content:'亿元'
                                                                        },
                                                                    ]
                                                                },
                                                                {
                                                                    component:'div',
                                                                    content: '园区总产值',
                                                                    props:{
                                                                        $style:{
                                                                            color:'#fff',
                                                                            fontsize:'14px',
                                                                            fontWeight:500,
                                                                            marginTop:'-9px'
                                                                        }
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    ]

                                                },
                                                {
                                                    component: 'div',
                                                    props: {
                                                        class: 'container__bottom__left-top__bottom__left__second',
                                                        $style: {
                                                            width: '282px',
                                                            height: '70px',
                                                            display: 'flex',
                                                            justifyContent: 'space-between'
                                                        }
                                                    },
                                                    children: [
                                                        {
                                                            component: 'div',
                                                            props: {
                                                                class: 'container__bottom__left-top__bottom__left__second__left',
                                                                $style: {
                                                                    width: '66px',
                                                                    height: '66px',
                                                                    display: 'flex',
                                                                    justifyContent: 'center',
                                                                    alignItems: 'center',
                                                                    marginTop: '4px',
                                                                    borderRadius: '50%',
                                                                    backgroundColor: '#19284b'
                                                                }
                                                            },
                                                            children: [
                                                                {
                                                                    component: 'img',
                                                                    props: {
                                                                        $style: {
                                                                            width: '30px',
                                                                            height: '30px',
                                                                        },
                                                                        src: '../../public/demo/image/Icon-Money.svg',
                                                                        alt: 'pic'
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            component: 'div',
                                                            props: {
                                                                class: 'container__bottom__left-top__bottom__left__second__right',
                                                                $style: {
                                                                    width: '200px',
                                                                    height: '70px',
                                                                }
                                                            },
                                                            children: [
                                                                {
                                                                    component:'div',
                                                                    children: [
                                                                        {
                                                                            component: 'span',
                                                                            props:{
                                                                                $style:{
                                                                                    display: 'inline-block',
                                                                                    color:'#fff',
                                                                                    fontSize:'22px',
                                                                                    fontWeight:500
                                                                                }
                                                                            },
                                                                            content:'￥'
                                                                        },
                                                                        {
                                                                            component: 'span',
                                                                            props:{
                                                                                $style:{
                                                                                    display: 'inline-block',
                                                                                    color:'#dece84',
                                                                                    fontSize:'40px',
                                                                                    fontWeight:400,
                                                                                    letterSpacing:1
                                                                                }
                                                                            },
                                                                            content:'73.30'
                                                                        },
                                                                        {
                                                                            component: 'span',
                                                                            props:{
                                                                                $style:{
                                                                                    display: 'inline-block',
                                                                                    color:'#8f919f',
                                                                                    fontSize:'14px',
                                                                                    fontWeight:500
                                                                                }
                                                                            },
                                                                            content:'亿元'
                                                                        },
                                                                    ]
                                                                },
                                                                {
                                                                    component:'div',
                                                                    content: '园区总投资',
                                                                    props:{
                                                                        $style:{
                                                                            color:'#fff',
                                                                            fontsize:'14px',
                                                                            fontWeight:500,
                                                                            marginTop:'-9px'
                                                                        }
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    ]

                                                }
                                            ]
                                        },
                                        {
                                            component: 'div',
                                            props: {
                                                class: 'container__bottom__left-top__bottom__right',
                                                $style: {
                                                    width: '398px',
                                                    height: '247px',
                                                    $border: `'1px solid red'`,
                                                }
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            component: 'div',
                            props: {
                                class: 'container__bottom__right-top',
                                $style: {
                                    width: '1018px',
                                    height: '414px',
                                    marginLeft: '34px',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }
                            },
                            children: [
                                {
                                    component: 'div',
                                    props: {
                                        class: 'container__bottom__right-top__top',
                                        $style: {
                                            width: '976px',
                                            height: '30px',
                                            $margin: `'32px 0 0 22px'`
                                        }
                                    },
                                    children: [
                                        {
                                            component: 'div',
                                            content: '科技成果',
                                            props: {
                                                $style: {
                                                    fontSize: '18px',
                                                    color: '#0071fe',
                                                    fontWeight: 500,
                                                    letterSpacing: 0.5,
                                                    $margin: `'1px 0 0 4px'`
                                                }
                                            }
                                        },
                                    ]
                                },
                                {
                                    component: 'div',
                                    props: {
                                        class: 'container__bottom__right-top__bottom',
                                        $style: {
                                            width: '991px',
                                            height: '308px',
                                            $margin: `'21px 0 0 23px'`,
                                            display: 'flex',
                                        }
                                    },
                                    children: [
                                        {
                                            component: 'div',
                                            props: {
                                                class: 'container__bottom__right-top__bottom__first',
                                                $style: {
                                                    width: '240px',
                                                    height: '308px',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                }
                                            },
                                            children: [
                                                {
                                                    component: 'div',
                                                    props: {
                                                        class: 'container__bottom__right-top__bottom__first__first',
                                                        $style: {
                                                            height: '75px',
                                                            width: '222px',
                                                            marginTop: '25px',
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                        }
                                                    },
                                                    children: [
                                                        {
                                                            component: 'div',
                                                            props: {
                                                                class: 'container__bottom__right-top__bottom__first__first__left',
                                                                $style: {
                                                                    width: '66px',
                                                                    height: '66px',
                                                                    marginTop: '3px',
                                                                    display: 'flex',
                                                                    justifyContent: 'center',
                                                                    alignItems: 'center',
                                                                    borderRadius: '50%',
                                                                    backgroundColor: '#19284b',
                                                                }
                                                            },
                                                            children: [
                                                                {
                                                                    component: 'img',
                                                                    props: {
                                                                        $style: {
                                                                            width: '30px',
                                                                            height: '30px',
                                                                        },
                                                                        src: '../../public/demo/image/Icon-Currency.svg',
                                                                        alt: 'pic'
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            component: 'div',
                                                            props: {
                                                                class: 'container__bottom__right-top__bottom__first__first__right',
                                                                $style: {
                                                                    width: '140px',
                                                                    height: '75px',
                                                                }
                                                            },
                                                            children: [
                                                                {
                                                                    component:'div',
                                                                    children: [
                                                                        {
                                                                            component: 'span',
                                                                            props:{
                                                                                $style:{
                                                                                    display: 'inline-block',
                                                                                    color:'#dece84',
                                                                                    fontSize:'40px',
                                                                                    fontWeight:400,
                                                                                    letterSpacing:1
                                                                                }
                                                                            },
                                                                            content:'1,948'
                                                                        },
                                                                        {
                                                                            component: 'span',
                                                                            props:{
                                                                                $style:{
                                                                                    display: 'inline-block',
                                                                                    color:'#8f919f',
                                                                                    fontSize:'14px',
                                                                                    fontWeight:500
                                                                                }
                                                                            },
                                                                            content:'个'
                                                                        },
                                                                    ]
                                                                },
                                                                {
                                                                    component:'div',
                                                                    content: '技术成果',
                                                                    props:{
                                                                        $style:{
                                                                            color:'#fff',
                                                                            fontsize:'14px',
                                                                            fontWeight:500,
                                                                            marginTop:'-4px'
                                                                        }
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    component: 'div',
                                                    props: {
                                                        class: 'container__bottom__right-top__bottom__first__second',
                                                        $style: {
                                                            height: '46px',
                                                            width: '192px',
                                                            marginTop: '29px',
                                                            marginLeft: '15px',
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                        }
                                                    },
                                                    children: [
                                                        {
                                                            component: 'div',
                                                            props: {
                                                                class: 'container__bottom__right-top__bottom__first__second__left',
                                                                $style: {
                                                                    width: '36px',
                                                                    height: '36px',
                                                                    marginTop: '5px',
                                                                    display: 'flex',
                                                                    justifyContent: 'center',
                                                                    alignItems: 'center',
                                                                    borderRadius: '50%',
                                                                    backgroundColor: '#19284b',
                                                                }
                                                            },
                                                            children: [
                                                                {
                                                                    component: 'img',
                                                                    props: {
                                                                        $style: {
                                                                            width: '14px',
                                                                            height: '14px',
                                                                        },
                                                                        src: '../../public/demo/image/Icon-Book.svg',
                                                                        alt: 'pic'
                                                                    }
                                                                }
                                                            ]

                                                        },
                                                        {
                                                            component: 'div',
                                                            props: {
                                                                class: 'container__bottom__right-top__bottom__first__second__right',
                                                                $style: {
                                                                    width: '140px',
                                                                    height: '46px',
                                                                }
                                                            },
                                                            children: [
                                                                {
                                                                    component:'div',
                                                                    children: [
                                                                        {
                                                                            component: 'span',
                                                                            props:{
                                                                                $style:{
                                                                                    display: 'inline-block',
                                                                                    color:'#dece84',
                                                                                    fontSize:'20px',
                                                                                    fontWeight:400,
                                                                                    letterSpacing:1
                                                                                }
                                                                            },
                                                                            content:'670'
                                                                        },
                                                                        {
                                                                            component: 'span',
                                                                            props:{
                                                                                $style:{
                                                                                    display: 'inline-block',
                                                                                    color:'#8f919f',
                                                                                    fontSize:'14px',
                                                                                    fontWeight:500
                                                                                }
                                                                            },
                                                                            content:'个'
                                                                        },
                                                                    ]
                                                                },
                                                                {
                                                                    component:'div',
                                                                    content: '基础理论成果',
                                                                    props:{
                                                                        $style:{
                                                                            color:'#fff',
                                                                            fontsize:'12px',
                                                                            fontWeight:500,
                                                                            marginTop:'-4px'
                                                                        }
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    component: 'div',
                                                    props: {
                                                        class: 'container__bottom__right-top__bottom__first__third',
                                                        $style: {
                                                            height: '46px',
                                                            width: '192px',
                                                            marginTop: '16px',
                                                            marginLeft: '15px',
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                        }
                                                    },
                                                    children: [
                                                        {
                                                            component: 'div',
                                                            props: {
                                                                class: 'container__bottom__right-top__bottom__first__third__left',
                                                                $style: {
                                                                    width: '36px',
                                                                    height: '36px',
                                                                    marginTop: '5px',
                                                                    display: 'flex',
                                                                    justifyContent: 'center',
                                                                    alignItems: 'center',
                                                                    borderRadius: '50%',
                                                                    backgroundColor: '#19284b',
                                                                }
                                                            },
                                                            children: [
                                                                {
                                                                    component: 'img',
                                                                    props: {
                                                                        $style: {
                                                                            width: '14px',
                                                                            height: '14px',
                                                                        },
                                                                        src: '../../public/demo/image/Icon-Application.svg',
                                                                        alt: 'pic'
                                                                    }
                                                                }
                                                            ]

                                                        },
                                                        {
                                                            component: 'div',
                                                            props: {
                                                                class: 'container__bottom__right-top__bottom__first__third__right',
                                                                $style: {
                                                                    width: '140px',
                                                                    height: '46px',
                                                                }
                                                            },
                                                            children: [
                                                                {
                                                                    component:'div',
                                                                    children: [
                                                                        {
                                                                            component: 'span',
                                                                            props:{
                                                                                $style:{
                                                                                    display: 'inline-block',
                                                                                    color:'#dece84',
                                                                                    fontSize:'20px',
                                                                                    fontWeight:400,
                                                                                    letterSpacing:1
                                                                                }
                                                                            },
                                                                            content:'800'
                                                                        },
                                                                        {
                                                                            component: 'span',
                                                                            props:{
                                                                                $style:{
                                                                                    display: 'inline-block',
                                                                                    color:'#8f919f',
                                                                                    fontSize:'14px',
                                                                                    fontWeight:500
                                                                                }
                                                                            },
                                                                            content:'个'
                                                                        },
                                                                    ]
                                                                },
                                                                {
                                                                    component:'div',
                                                                    content: '应用技术成果',
                                                                    props:{
                                                                        $style:{
                                                                            color:'#fff',
                                                                            fontsize:'12px',
                                                                            fontWeight:500,
                                                                            marginTop:'-4px'
                                                                        }
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    component: 'div',
                                                    props: {
                                                        class: 'container__bottom__right-top__bottom__first__forth',
                                                        $style: {
                                                            height: '46px',
                                                            width: '192px',
                                                            marginTop: '16px',
                                                            marginLeft: '15px',
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                        }
                                                    },
                                                    children: [
                                                        {
                                                            component: 'div',
                                                            props: {
                                                                class: 'container__bottom__right-top__bottom__first__forth__left',
                                                                $style: {
                                                                    width: '36px',
                                                                    height: '36px',
                                                                    marginTop: '5px',
                                                                    display: 'flex',
                                                                    justifyContent: 'center',
                                                                    alignItems: 'center',
                                                                    borderRadius: '50%',
                                                                    backgroundColor: '#19284b',
                                                                }
                                                            },
                                                            children: [
                                                                {
                                                                    component: 'img',
                                                                    props: {
                                                                        $style: {
                                                                            width: '14px',
                                                                            height: '14px',
                                                                        },
                                                                        src: '../../public/demo/image/Icon-Rocket.svg',
                                                                        alt: 'pic'
                                                                    }
                                                                }
                                                            ]

                                                        },
                                                        {
                                                            component: 'div',
                                                            props: {
                                                                class: 'container__bottom__right-top__bottom__first__forth__right',
                                                                $style: {
                                                                    width: '140px',
                                                                    height: '46px',
                                                                }
                                                            },
                                                            children: [
                                                                {
                                                                    component:'div',
                                                                    children: [
                                                                        {
                                                                            component: 'span',
                                                                            props:{
                                                                                $style:{
                                                                                    display: 'inline-block',
                                                                                    color:'#dece84',
                                                                                    fontSize:'20px',
                                                                                    fontWeight:400,
                                                                                    letterSpacing:1
                                                                                }
                                                                            },
                                                                            content:'478'
                                                                        },
                                                                        {
                                                                            component: 'span',
                                                                            props:{
                                                                                $style:{
                                                                                    display: 'inline-block',
                                                                                    color:'#8f919f',
                                                                                    fontSize:'14px',
                                                                                    fontWeight:500
                                                                                }
                                                                            },
                                                                            content:'个'
                                                                        },
                                                                    ]
                                                                },
                                                                {
                                                                    component:'div',
                                                                    content: '软科学成果',
                                                                    props:{
                                                                        $style:{
                                                                            color:'#fff',
                                                                            fontsize:'12px',
                                                                            fontWeight:500,
                                                                            marginTop:'-4px'
                                                                        }
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            component: 'div',
                                            props: {
                                                class: 'container__bottom__right-top__bottom__second',
                                                $style: {
                                                    width: '358px',
                                                    height: '308px',
                                                }
                                            },
                                            children: [
                                                {
                                                    component: 'v-chart',
                                                    props:{
                                                        $option:{
                                                            $legend: `{
                                                                show: true,
                                                                type: 'plain',
                                                                bottom: 0,
                                                                icon:'circle',
                                                                textStyle:{
                                                                    color:'#fff',
                                                                    fontSize:'14px'
                                                                }
                                                            }`,
                                                            $tooltip: `{
                                                                show: true,
                                                            }`,
                                                            $grid:`{
                                                                width: '310px',
                                                                height: '175px',
                                                                top: '35px',
                                                                left: '40px'
                                                            }`,
                                                            $xAxis:`{
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
                                                            }`,
                                                            $yAxis: `{
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
                                                            }`,
                                                            $series: `[
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
                                                            ]`
                                                        }
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            component: 'div',
                                            props: {
                                                class: 'container__bottom__right-top__bottom__third',
                                                $style: {
                                                    width: '389px',
                                                    height: '308px',
                                                }
                                            },
                                            children: [
                                                {
                                                    component: 'v-chart',
                                                    props:{
                                                        ref:'chart2',
                                                        $option:{
                                                            $tooltip:`{
                                                        show:true,
                                                        backgroundColor:'rgba(50,50,50,0.7)',
                                                        textStyle:{
                                                        color:'#fff',
                                                        },
                                                        formatter:f4
                                                    }`,
                                                            $color:`['#007afe','#dece84','#8f919f','#2dc4b6','#f7b26f','#3fa7d6']`,
                                                            $series:`{
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
                                                            }`
                                                        }
                                                    },
                                                    events: {
                                                        mouseover:{
                                                            params:['$event'],
                                                            actions:['fn3($event)']
                                                        },
                                                        mouseout:{
                                                            params:['$event'],
                                                            actions:['fn4($event)']
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            component: 'div',
                            props: {
                                class: 'container__bottom__left-bottom',
                                $style: {
                                    width: '1018px',
                                    height: '414px',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }
                            },
                            children: [
                                {
                                    component: 'div',
                                    props: {
                                        class: 'container__bottom__left-bottom__top',
                                        $style: {
                                            width: '976px',
                                            height: '30px',
                                            $margin: `'32px 0 0 22px'`,
                                        }
                                    },
                                    children: [
                                        {
                                            component: 'div',
                                            content: '项目申报',
                                            props: {
                                                $style: {
                                                    fontSize: '18px',
                                                    color: '#0071fe',
                                                    fontWeight: 500,
                                                    letterSpacing: 0.5,
                                                    $margin: `'1px 0 0 4px'`
                                                }
                                            }
                                        },
                                    ]
                                },
                                {
                                    component: 'div',
                                    props: {
                                        class: 'container__bottom__left-bottom__bottom',
                                        $style: {
                                            width: '958px',
                                            height: '274px',
                                            $margin: `'52px 0 0 30px'`,
                                            display: 'flex',
                                        }
                                    },
                                    children: [
                                        {
                                            component: 'div',
                                            props: {
                                                class: 'container__bottom__left-bottom__bottom__left',
                                                $style: {
                                                    width: '261px',
                                                    height: '218px',
                                                    marginTop: '5px',
                                                    $border: `'1px solid red'`,
                                                }
                                            },
                                            children: [
                                                {
                                                    component: 'div',
                                                    props: {
                                                        class: 'container__bottom__left-bottom__bottom__left__top',
                                                        $style: {
                                                            width: '221px',
                                                            height: '75px',
                                                            $border: `'1px solid white'`,
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                        }
                                                    },
                                                    children: [
                                                        {
                                                            component: 'div',
                                                            props: {
                                                                $style: {
                                                                    width: '66px',
                                                                    height: '66px',
                                                                    marginTop: '4px',
                                                                    display: 'flex',
                                                                    justifyContent: 'center',
                                                                    alignItems: 'center',
                                                                    borderRadius: '50%',
                                                                    backgroundColor: '#19284b'
                                                                }
                                                            },
                                                            children: [
                                                                {
                                                                    component: 'img',
                                                                    props: {
                                                                        $style: {
                                                                            width: '30px',
                                                                            height: '30px',
                                                                        },
                                                                        src: '../../public/demo/image/Icon-Project02.svg',
                                                                        alt: 'pic'
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            component: 'div',
                                                            props: {
                                                                $style: {
                                                                    width: '140px',
                                                                    height: '75px',
                                                                    $border: `'1px solid green'`,
                                                                }
                                                            }
                                                        },
                                                    ]
                                                },
                                                {
                                                    component: 'div',
                                                    props: {
                                                        class: 'container__bottom__left-bottom__bottom__left__middle',
                                                        $style: {
                                                            width: '261px',
                                                            height: '46px',
                                                            $border: `'1px solid white'`,
                                                            marginTop: '34px',
                                                            display: 'flex',
                                                            justifyContent: 'space-between'
                                                        }
                                                    },
                                                    children: [
                                                        {
                                                            component: 'div',
                                                            props: {
                                                                class: 'container__bottom__left-bottom__bottom__left__middle__left',
                                                                $style: {
                                                                    width: '143px',
                                                                    height: '46px',
                                                                    display: 'flex',
                                                                    justifyContent: 'space-between',
                                                                    $border: `'1px solid yellow'`,
                                                                }
                                                            },
                                                            children: [
                                                                {
                                                                    component: 'div',
                                                                    props: {
                                                                        class: 'container__bottom__left-bottom__bottom__left__middle__left__left',
                                                                        $style: {
                                                                            width: '36px',
                                                                            height: '36px',
                                                                            marginTop: '5px',
                                                                            display: 'flex',
                                                                            justifyContent: 'center',
                                                                            alignItems: 'center',
                                                                            borderRadius: '50%',
                                                                            backgroundColor: '#19284b',
                                                                        }
                                                                    },
                                                                    children: [
                                                                        {
                                                                            component: 'img',
                                                                            props: {
                                                                                $style: {
                                                                                    width: '14px',
                                                                                    height: '14px',
                                                                                },
                                                                                src: '../../public/demo/image/Icon-Project.svg',
                                                                                alt: 'pic'
                                                                            }
                                                                        }
                                                                    ]

                                                                },
                                                                {
                                                                    component: 'div',
                                                                    props: {
                                                                        class: 'container__bottom__left-bottom__bottom__left__middle__left__right',
                                                                        $style: {
                                                                            width: '100px',
                                                                            height: '46px',
                                                                            $border: `'1px solid red'`,
                                                                        }
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            component: 'div',
                                                            props: {
                                                                class: 'container__bottom__left-bottom__bottom__left__middle__right',
                                                                $style: {
                                                                    width: '112px',
                                                                    height: '46px',
                                                                    display: 'flex',
                                                                    justifyContent: 'space-between',
                                                                    $border: `'1px solid yellow'`,
                                                                }
                                                            },
                                                            children: [
                                                                {
                                                                    component: 'div',
                                                                    props: {
                                                                        class: 'container__bottom__left-bottom__bottom__left__middle__right__left',
                                                                        $style: {
                                                                            width: '36px',
                                                                            height: '36px',
                                                                            marginTop: '5px',
                                                                            display: 'flex',
                                                                            justifyContent: 'center',
                                                                            alignItems: 'center',
                                                                            borderRadius: '50%',
                                                                            backgroundColor: '#19284b',
                                                                        }
                                                                    },
                                                                    children: [
                                                                        {
                                                                            component: 'img',
                                                                            props: {
                                                                                $style: {
                                                                                    width: '14px',
                                                                                    height: '14px',
                                                                                },
                                                                                src: '../../public/demo/image/Icon-Tech.svg',
                                                                                alt: 'pic'
                                                                            }
                                                                        }
                                                                    ]

                                                                },
                                                                {
                                                                    component: 'div',
                                                                    props: {
                                                                        class: 'container__bottom__left-bottom__bottom__left__middle__right__right',
                                                                        $style: {
                                                                            width: '70px',
                                                                            height: '46px',
                                                                            $border: `'1px solid red'`,
                                                                        }
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                    ]
                                                },
                                                {
                                                    component: 'div',
                                                    props: {
                                                        class: 'container__bottom__left-bottom__bottom__left__bottom',
                                                        $style: {
                                                            width: '261px',
                                                            height: '46px',
                                                            $border: `'1px solid white'`,
                                                            marginTop: '17px',
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                        }
                                                    },
                                                    children: [
                                                        {
                                                            component: 'div',
                                                            props: {
                                                                class: 'container__bottom__left-bottom__bottom__left__bottom__left',
                                                                $style: {
                                                                    width: '143px',
                                                                    height: '46px',
                                                                    display: 'flex',
                                                                    justifyContent: 'space-between',
                                                                    $border: `'1px solid yellow'`,
                                                                }
                                                            },
                                                            children: [
                                                                {
                                                                    component: 'div',
                                                                    props: {
                                                                        class: 'container__bottom__left-bottom__bottom__left__bottom__left__left',
                                                                        $style: {
                                                                            width: '36px',
                                                                            height: '36px',
                                                                            marginTop: '5px',
                                                                            display: 'flex',
                                                                            justifyContent: 'center',
                                                                            alignItems: 'center',
                                                                            borderRadius: '50%',
                                                                            backgroundColor: '#19284b',
                                                                        }
                                                                    },
                                                                    children: [
                                                                        {
                                                                            component: 'img',
                                                                            props: {
                                                                                $style: {
                                                                                    width: '14px',
                                                                                    height: '14px',
                                                                                },
                                                                                src: '../../public/demo/image/Icon-Sort.svg',
                                                                                alt: 'pic'
                                                                            }
                                                                        }
                                                                    ]

                                                                },
                                                                {
                                                                    component: 'div',
                                                                    props: {
                                                                        class: 'container__bottom__left-bottom__bottom__left__bottom__left__right',
                                                                        $style: {
                                                                            width: '100px',
                                                                            height: '46px',
                                                                            $border: `'1px solid red'`,
                                                                        }
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            component: 'div',
                                                            props: {
                                                                class: 'container__bottom__left-bottom__bottom__left__bottom__right',
                                                                $style: {
                                                                    width: '112px',
                                                                    height: '46px',
                                                                    display: 'flex',
                                                                    justifyContent: 'space-between',
                                                                    $border: `'1px solid yellow'`,
                                                                }
                                                            },
                                                            children: [
                                                                {
                                                                    component: 'div',
                                                                    props: {
                                                                        class: 'container__bottom__left-bottom__bottom__left__bottom__right__left',
                                                                        $style: {
                                                                            width: '36px',
                                                                            height: '36px',
                                                                            marginTop: '5px',
                                                                            display: 'flex',
                                                                            justifyContent: 'center',
                                                                            alignItems: 'center',
                                                                            borderRadius: '50%',
                                                                            backgroundColor: '#19284b',
                                                                        }
                                                                    },
                                                                    children: [
                                                                        {
                                                                            component: 'img',
                                                                            props: {
                                                                                $style: {
                                                                                    width: '14px',
                                                                                    height: '14px',
                                                                                },
                                                                                src: '../../public/demo/image/Icon-Sapling.svg',
                                                                                alt: 'pic'
                                                                            }
                                                                        }
                                                                    ]

                                                                },
                                                                {
                                                                    component: 'div',
                                                                    props: {
                                                                        class: 'container__bottom__left-bottom__bottom__left__bottom__right__right',
                                                                        $style: {
                                                                            width: '70px',
                                                                            height: '46px',
                                                                            $border: `'1px solid red'`,
                                                                        }
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                    ]
                                                },

                                            ]
                                        },
                                        {
                                            component: 'div',
                                            props: {
                                                class: 'container__bottom__left-bottom__bottom__middle',
                                                $style: {
                                                    width: '230px',
                                                    height: '222px',
                                                    marginTop: '2px',
                                                    marginLeft: '40px',
                                                }
                                            },
                                            children: [
                                                {
                                                    component: 'div',
                                                    props: {
                                                        class: 'container__bottom__left-bottom__bottom__middle__top',
                                                        $style: {
                                                            width: '230px',
                                                            height: '206px',
                                                        }
                                                    },
                                                    children: [
                                                        {
                                                            component: 'v-chart',
                                                            props: {
                                                                $option: {
                                                                    $tooltip: {
                                                                        show: true,
                                                                        trigger: 'item',
                                                                    },
                                                                    $series: `[
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
                                                                    ]`
                                                                }
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    component: 'div',
                                                    content: '年度申报成功率',
                                                    props: {
                                                        class: 'container__bottom__left-bottom__bottom__middle__bottom',
                                                        $style: {
                                                            width: '230px',
                                                            height: '16px',
                                                            color: '#fff',
                                                            fontSize: '16px',
                                                            fontWeight: 400,
                                                            textAlign: 'center',
                                                        }
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            component: 'div',
                                            props: {
                                                class: 'container__bottom__left-bottom__bottom__right',
                                                $style: {
                                                    width: '372px',
                                                    height: '274px',
                                                    marginLeft: '55px',
                                                }
                                            },
                                            children: [
                                                {
                                                    component: 'v-chart',
                                                    props:{
                                                        $option:{
                                                            $legend: `{
                                                                show: true,
                                                                type: 'plain',
                                                                bottom: 0,
                                                                icon:'circle',
                                                                textStyle:{
                                                                    color:'#fff',
                                                                    fontSize:'14px'
                                                                }
                                                            }`,
                                                            $grid:`{
                                                                width:'250px',
                                                                height:'210px',
                                                                top:3,
                                                                right:20
                                                            }`,
                                                            $tooltip: `{
                                                                show: true,
                                                            }`,
                                                            $yAxis: `{
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
                                                            }`,
                                                            $xAxis: `{
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
                                                            }`,
                                                            $series: `[
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
                                                            ]`
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            component: 'div',
                            props: {
                                class: 'container__bottom__right-bottom',
                                $style: {
                                    width: '764px',
                                    height: '414px',
                                    marginLeft: '34px',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }
                            },
                            children: [
                                {
                                    component: 'div',
                                    props: {
                                        class: 'container__bottom__right-bottom__top',
                                        $style: {
                                            width: '722px',
                                            height: '30px',
                                            $margin: `'32px 0 0 22px'`,
                                        }
                                    },
                                    children: [
                                        {
                                            component: 'div',
                                            content: '经济产出行业对比',
                                            props: {
                                                $style: {
                                                    fontSize: '18px',
                                                    color: '#0071fe',
                                                    fontWeight: 500,
                                                    letterSpacing: 0.5,
                                                    $margin: `'1px 0 0 4px'`
                                                }
                                            }
                                        },
                                    ]
                                },
                                {
                                    component: 'div',
                                    props: {
                                        class: 'container__bottom__right-bottom__bottom',
                                        $style: {
                                            width: '670px',
                                            height: '340px',
                                            $margin: `'7px 0 0 22px'`,
                                        }
                                    },
                                    children: [
                                        {
                                            component: 'v-chart',
                                            props:{
                                                ref:'chart1',
                                                $option:{
                                                    $title:`{
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
                                                    }`,
                                                    $legend:`{
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
                                                    }`,
                                                    $tooltip:`{
                                                        show:true,
                                                        backgroundColor:'rgba(50,50,50,0.7)',
                                                        textStyle:{
                                                        color:'#fff',
                                                        },
                                                        formatter:f2
                                                    }`,
                                                    $color:`['#007afe','#dece84','#8f919f','#2dc4b6','#f7b26f','#3fa7d6']`,
                                                    $series:`{
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
                                                    }`
                                                }
                                            },
                                            events: {
                                                mouseover:{
                                                    params:['$event'],
                                                    actions:['fn1($event)']
                                                },
                                                mouseout:{
                                                    params:['$event'],
                                                    actions:['fn2($event)']
                                                }
                                            }
                                        }
                                    ]
                                }
                            ]
                        },

                    ]
                },

            ]
        }
    ]
}
