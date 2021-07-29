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
                    backgroundColor: '#192342',
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
                            $border: `'1px solid black'`,
                            display: 'flex',
                            justifyContent: 'center'
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
                                    color: '#fff',
                                    textAlign: 'center'
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
                            height: '1010px',
                            $margin: `'63px 0 0 50px'`,
                            display: 'flex',
                            flexWrap: 'wrap'
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
                                    $border: `'1px solid red'`,
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
                                            border: '1px solid green',
                                            $margin: `'32px 0 0 22px'`
                                        }
                                    },
                                    children: [
                                        {
                                            component: 'div',
                                            content: 'xxx',
                                            props: {
                                                $style: {
                                                    fontSize: '18px',
                                                    color: '#0071fe',
                                                    fontWeight: 500,
                                                    letterSpacing: 0.5
                                                }
                                            }
                                        },
                                        {
                                            component: 'img',
                                            props: {
                                                src: '',
                                                alt: 'pic'
                                            }
                                        }
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
                                            $border: `'1px solid yellow'`,
                                            display:'flex',
                                            justifyContent: 'space-between'
                                        }
                                    },
                                    children:[
                                        {
                                            component: 'div',
                                            props:{
                                                class: 'container__bottom__left-top__bottom__left',
                                                $style: {
                                                    width:'282px',
                                                    height:'207px',
                                                    $border: `'1px solid red'`,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between'
                                                }
                                            },
                                            children:[
                                                {
                                                    component: 'div',
                                                    props:{
                                                        class: 'container__bottom__left-top__bottom__left__first',
                                                        $style: {
                                                            width:'282px',
                                                            height:'70px',
                                                            $border: `'1px solid green'`,
                                                            display: 'flex',
                                                            justifyContent: 'space-between'
                                                        }
                                                    },
                                                    children:[
                                                        {
                                                            component: 'div',
                                                            content: 'icon',
                                                            props:{
                                                                class: 'container__bottom__left-top__bottom__left__first__left',
                                                                $style: {
                                                                    width:'66px',
                                                                    height:'66px',
                                                                    $border: `'1px solid green'`,
                                                                    display: 'flex',
                                                                    justifyContent:'center',
                                                                    alignItems: 'center',
                                                                    marginTop:'4px'
                                                                }
                                                            },
                                                        },
                                                        {
                                                            component: 'div',
                                                            content:'图标',
                                                            props:{
                                                                class: 'container__bottom__left-top__bottom__left__first__right',
                                                                $style: {
                                                                    width:'200px',
                                                                    height:'70px',
                                                                    $border: `'1px solid green'`,
                                                                }
                                                            },
                                                        }
                                                    ]

                                                },
                                                {
                                                    component: 'div',
                                                    props:{
                                                        class: 'container__bottom__left-top__bottom__left__second',
                                                        $style: {
                                                            width:'282px',
                                                            height:'70px',
                                                            $border: `'1px solid green'`,
                                                            display: 'flex',
                                                            justifyContent: 'space-between'
                                                        }
                                                    },
                                                    children:[
                                                        {
                                                            component: 'div',
                                                            content: 'icon',
                                                            props:{
                                                                class: 'container__bottom__left-top__bottom__left__second__left',
                                                                $style: {
                                                                    width:'66px',
                                                                    height:'66px',
                                                                    $border: `'1px solid green'`,
                                                                    display: 'flex',
                                                                    justifyContent:'center',
                                                                    alignItems: 'center',
                                                                    marginTop:'4px'
                                                                }
                                                            },
                                                        },
                                                        {
                                                            component: 'div',
                                                            content:'图标',
                                                            props:{
                                                                class: 'container__bottom__left-top__bottom__left__second__right',
                                                                $style: {
                                                                    width:'200px',
                                                                    height:'70px',
                                                                    $border: `'1px solid green'`,
                                                                }
                                                            },
                                                        }
                                                    ]

                                                }
                                            ]
                                        },
                                        {
                                            component: 'div',
                                            props:{
                                                class: 'container__bottom__left-top__bottom__right',
                                                $style: {
                                                    width:'398px',
                                                    height:'247px',
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
                                    $border: `'1px solid red'`,
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
                                            $border: `'1px solid green'`,
                                            $margin:`'32px 0 0 22px'`
                                        }
                                    },
                                    children: [
                                        {
                                            component: 'div',
                                            content: 'xxx',
                                            props: {
                                                $style: {
                                                    fontSize: '18px',
                                                    color: '#0071fe',
                                                    fontWeight: 500,
                                                    letterSpacing: 0.5
                                                }
                                            }
                                        },
                                        {
                                            component: 'img',
                                            props: {
                                                src: '',
                                                alt: 'pic'
                                            }
                                        }
                                    ]
                                },
                                {
                                    component: 'div',
                                    props: {
                                        class: 'container__bottom__right-top__bottom',
                                        $style: {
                                            width: '991px',
                                            height: '308px',
                                            $border: `'1px solid yellow'`,
                                            $margin:`'21px 0 0 23px'`,
                                            display: 'flex',
                                        }
                                    },
                                    children: [
                                        {
                                            component: 'div',
                                            props: {
                                                class:'container__bottom__right-top__bottom__first',
                                                $style:{
                                                    width:'240px',
                                                    height:'308px',
                                                    $border: `'1px solid red'`,
                                                    display:'flex',
                                                    flexDirection:'column',
                                                }
                                            },
                                            children: [
                                                {
                                                    component: 'div',
                                                    props:{
                                                        class:'container__bottom__right-top__bottom__first__first',
                                                        $style:{
                                                            height:'75px',
                                                            width:'222px',
                                                            $border: `'1px solid green'`,
                                                            marginTop: '25px',
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                        }
                                                    },
                                                    children: [
                                                        {
                                                            component: 'div',
                                                            props:{
                                                                class:'container__bottom__right-top__bottom__first__first__left',
                                                                $style:{
                                                                    width:'66px',
                                                                    height:'66px',
                                                                    marginTop: '3px',
                                                                    $border: `'1px solid red'`
                                                                }
                                                            }
                                                        },
                                                        {
                                                            component: 'div',
                                                            props:{
                                                                class:'container__bottom__right-top__bottom__first__first__right',
                                                                $style:{
                                                                    width:'140px',
                                                                    height:'75px',
                                                                    $border: `'1px solid red'`
                                                                }
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    component: 'div',
                                                    props:{
                                                        class:'container__bottom__right-top__bottom__first__second',
                                                        $style:{
                                                            height:'46px',
                                                            width:'192px',
                                                            $border: `'1px solid green'`,
                                                            marginTop: '29px',
                                                            marginLeft: '15px',
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                        }
                                                    },
                                                    children: [
                                                        {
                                                            component: 'div',
                                                            props:{
                                                                class:'container__bottom__right-top__bottom__first__second__left',
                                                                $style:{
                                                                    width:'36px',
                                                                    height:'36px',
                                                                    marginTop: '5px',
                                                                    $border: `'1px solid red'`
                                                                }
                                                            }
                                                        },
                                                        {
                                                            component: 'div',
                                                            props:{
                                                                class:'container__bottom__right-top__bottom__first__second__right',
                                                                $style:{
                                                                    width:'140px',
                                                                    height:'46px',
                                                                    $border: `'1px solid red'`
                                                                }
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    component: 'div',
                                                    props:{
                                                        class:'container__bottom__right-top__bottom__first__third',
                                                        $style:{
                                                            height:'46px',
                                                            width:'192px',
                                                            $border: `'1px solid green'`,
                                                            marginTop: '16px',
                                                            marginLeft: '15px',
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                        }
                                                    },
                                                    children: [
                                                        {
                                                            component: 'div',
                                                            props:{
                                                                class:'container__bottom__right-top__bottom__first__third__left',
                                                                $style:{
                                                                    width:'36px',
                                                                    height:'36px',
                                                                    marginTop: '5px',
                                                                    $border: `'1px solid red'`
                                                                }
                                                            }
                                                        },
                                                        {
                                                            component: 'div',
                                                            props:{
                                                                class:'container__bottom__right-top__bottom__first__third__right',
                                                                $style:{
                                                                    width:'140px',
                                                                    height:'46px',
                                                                    $border: `'1px solid red'`
                                                                }
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    component: 'div',
                                                    props:{
                                                        class:'container__bottom__right-top__bottom__first__forth',
                                                        $style:{
                                                            height:'46px',
                                                            width:'192px',
                                                            $border: `'1px solid green'`,
                                                            marginTop: '16px',
                                                            marginLeft: '15px',
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                        }
                                                    },
                                                    children: [
                                                        {
                                                            component: 'div',
                                                            props:{
                                                                class:'container__bottom__right-top__bottom__first__fotrh__left',
                                                                $style:{
                                                                    width:'36px',
                                                                    height:'36px',
                                                                    marginTop: '5px',
                                                                    $border: `'1px solid red'`
                                                                }
                                                            }
                                                        },
                                                        {
                                                            component: 'div',
                                                            props:{
                                                                class:'container__bottom__right-top__bottom__first__forth__right',
                                                                $style:{
                                                                    width:'140px',
                                                                    height:'46px',
                                                                    $border: `'1px solid red'`
                                                                }
                                                            }
                                                        }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            component: 'div',
                                            props:{
                                                class:'container__bottom__right-top__bottom__second',
                                                $style:{
                                                    width:'358px',
                                                    height:'308px',
                                                    $border: `'1px solid red'`,
                                                }
                                            }
                                        },
                                        {
                                            component: 'div',
                                            props:{
                                                class:'container__bottom__right-top__bottom__third',
                                                $style:{
                                                    width:'389px',
                                                    height:'308px',
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
                                class: 'container__bottom__left-bottom',
                                $style: {
                                    width: '1018px',
                                    height: '414px',
                                    marginTop: '-13px',
                                    $border: `'1px solid red'`,
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
                                            $border: `'1px solid green'`,
                                            $margin:`'32px 0 0 22px'`,
                                        }
                                    },
                                    children: [
                                        {
                                            component: 'div',
                                            content: 'xxx',
                                            props: {
                                                $style: {
                                                    fontSize: '18px',
                                                    color: '#0071fe',
                                                    fontWeight: 500,
                                                    letterSpacing: 0.5
                                                }
                                            }
                                        },
                                        {
                                            component: 'img',
                                            props: {
                                                src: '',
                                                alt: 'pic'
                                            }
                                        }
                                    ]
                                },
                                {
                                    component: 'div',
                                    props: {
                                        class: 'container__bottom__left-bottom__bottom',
                                        $style: {
                                            width: '958px',
                                            height: '274px',
                                            $border: `'1px solid yellow'`,
                                            $margin:`'52px 0 0 30px'`,
                                            display: 'flex',
                                        }
                                    },
                                    children:[
                                        {
                                            component: 'div',
                                            props:{
                                                class: 'container__bottom__left-bottom__bottom__left',
                                                $style: {
                                                    width:'261px',
                                                    height:'218px',
                                                    marginTop:'5px',
                                                    $border: `'1px solid red'`,
                                                }
                                            },
                                            children: [
                                                {
                                                    component: 'div',
                                                    props:{
                                                        class:'container__bottom__left-bottom__bottom__left__top',
                                                        $style:{
                                                            width: '221px',
                                                            height:'75px',
                                                            $border: `'1px solid white'`,
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                        }
                                                    },
                                                    children: [
                                                        {
                                                            component: 'div',
                                                            props:{
                                                                $style: {
                                                                    width: '66px',
                                                                    height:'66px',
                                                                    $border: `'1px solid green'`,
                                                                    marginTop:'4px'
                                                                }
                                                            }
                                                        },
                                                        {
                                                            component: 'div',
                                                            props:{
                                                                $style: {
                                                                    width: '140px',
                                                                    height:'75px',
                                                                    $border: `'1px solid green'`,
                                                                }
                                                            }
                                                        },
                                                    ]
                                                },
                                                {
                                                    component: 'div',
                                                    props:{
                                                        class:'container__bottom__left-bottom__bottom__left__middle',
                                                        $style:{
                                                            width: '261px',
                                                            height:'46px',
                                                            $border: `'1px solid white'`,
                                                            marginTop: '34px',
                                                            display: 'flex',
                                                            justifyContent: 'space-between'
                                                        }
                                                    },
                                                    children:[
                                                        {
                                                            component:'div',
                                                            props:{
                                                                class:'container__bottom__left-bottom__bottom__left__middle__left',
                                                                $style:{
                                                                    width: '143px',
                                                                    height:'46px',
                                                                    display: 'flex',
                                                                    justifyContent:'space-between',
                                                                    $border: `'1px solid yellow'`,
                                                                }
                                                            },
                                                            children:[
                                                                {
                                                                    component:'div',
                                                                    props:{
                                                                        class:'container__bottom__left-bottom__bottom__left__middle__left__left',
                                                                        $style:{
                                                                            width: '36px',
                                                                            height: '36px',
                                                                            marginTop:'5px',
                                                                            $border: `'1px solid red'`,
                                                                        }
                                                                    }
                                                                },
                                                                {
                                                                    component:'div',
                                                                    props:{
                                                                        class:'container__bottom__left-bottom__bottom__left__middle__left__right',
                                                                        $style:{
                                                                            width: '100px',
                                                                            height: '46px',
                                                                            $border: `'1px solid red'`,
                                                                        }
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            component:'div',
                                                            props:{
                                                                class:'container__bottom__left-bottom__bottom__left__middle__right',
                                                                $style:{
                                                                    width: '112px',
                                                                    height:'46px',
                                                                    display: 'flex',
                                                                    justifyContent:'space-between',
                                                                    $border: `'1px solid yellow'`,
                                                                }
                                                            },
                                                            children:[
                                                                {
                                                                    component:'div',
                                                                    props:{
                                                                        class:'container__bottom__left-bottom__bottom__left__middle__right__left',
                                                                        $style:{
                                                                            width: '36px',
                                                                            height: '36px',
                                                                            marginTop:'5px',
                                                                            $border: `'1px solid red'`,
                                                                        }
                                                                    }
                                                                },
                                                                {
                                                                    component:'div',
                                                                    props:{
                                                                        class:'container__bottom__left-bottom__bottom__left__middle__right__right',
                                                                        $style:{
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
                                                    props:{
                                                        class:'container__bottom__left-bottom__bottom__left__bottom',
                                                        $style:{
                                                            width: '261px',
                                                            height:'46px',
                                                            $border: `'1px solid white'`,
                                                            marginTop: '17px',
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                        }
                                                    },
                                                    children:[
                                                        {
                                                            component:'div',
                                                            props:{
                                                                class:'container__bottom__left-bottom__bottom__left__bottom__left',
                                                                $style:{
                                                                    width: '143px',
                                                                    height:'46px',
                                                                    display: 'flex',
                                                                    justifyContent:'space-between',
                                                                    $border: `'1px solid yellow'`,
                                                                }
                                                            },
                                                            children:[
                                                                {
                                                                    component:'div',
                                                                    props:{
                                                                        class:'container__bottom__left-bottom__bottom__left__bottom__left__left',
                                                                        $style:{
                                                                            width: '36px',
                                                                            height: '36px',
                                                                            marginTop:'5px',
                                                                            $border: `'1px solid red'`,
                                                                        }
                                                                    }
                                                                },
                                                                {
                                                                    component:'div',
                                                                    props:{
                                                                        class:'container__bottom__left-bottom__bottom__left__bottom__left__right',
                                                                        $style:{
                                                                            width: '100px',
                                                                            height: '46px',
                                                                            $border: `'1px solid red'`,
                                                                        }
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            component:'div',
                                                            props:{
                                                                class:'container__bottom__left-bottom__bottom__left__bottom__right',
                                                                $style:{
                                                                    width: '112px',
                                                                    height:'46px',
                                                                    display: 'flex',
                                                                    justifyContent:'space-between',
                                                                    $border: `'1px solid yellow'`,
                                                                }
                                                            },
                                                            children:[
                                                                {
                                                                    component:'div',
                                                                    props:{
                                                                        class:'container__bottom__left-bottom__bottom__left__bottom__right__left',
                                                                        $style:{
                                                                            width: '36px',
                                                                            height: '36px',
                                                                            marginTop:'5px',
                                                                            $border: `'1px solid red'`,
                                                                        }
                                                                    }
                                                                },
                                                                {
                                                                    component:'div',
                                                                    props:{
                                                                        class:'container__bottom__left-bottom__bottom__left__bottom__right__right',
                                                                        $style:{
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
                                            props:{
                                                class: 'container__bottom__left-bottom__bottom__middle',
                                                $style: {
                                                    width:'230px',
                                                    height:'222px',
                                                    marginTop:'2px',
                                                    marginLeft:'40px',
                                                    $border: `'1px solid red'`,
                                                }
                                            },
                                            children:[
                                                {
                                                    component:'div',
                                                    props:{
                                                        class:'container__bottom__left-bottom__bottom__middle__top',
                                                        $style:{
                                                            width:'230px',
                                                            height:'206px',
                                                            $border: `'1px solid white'`,
                                                        }
                                                    }
                                                },
                                                {
                                                    component:'div',
                                                    props:{
                                                        class:'container__bottom__left-bottom__bottom__middle__bottom',
                                                        $style:{
                                                            width:'230px',
                                                            height:'16px',
                                                            $border: `'1px solid white'`,

                                                        }
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            component: 'div',
                                            props:{
                                                class: 'container__bottom__left-bottom__bottom__right',
                                                $style: {
                                                    width:'372px',
                                                    height:'274px',
                                                    marginLeft:'55px',
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
                                class: 'container__bottom__right-bottom',
                                $style: {
                                    width: '764px',
                                    height: '414px',
                                    marginLeft: '34px',
                                    marginTop: '-13px',
                                    $border: `'1px solid red'`,
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
                                            $border: `'1px solid green'`,
                                            $margin:`'32px 0 0 22px'`,
                                        }
                                    },
                                    children: [
                                        {
                                            component: 'div',
                                            content: 'xxx',
                                            props: {
                                                $style: {
                                                    fontSize: '18px',
                                                    color: '#0071fe',
                                                    fontWeight: 500,
                                                    letterSpacing: 0.5
                                                }
                                            }
                                        },
                                        {
                                            component: 'img',
                                            props: {
                                                src: '',
                                                alt: 'pic'
                                            }
                                        }
                                    ]
                                },
                                {
                                    component: 'div',
                                    props: {
                                        class: 'container__bottom__right-bottom__bottom',
                                        $style: {
                                            width: '670px',
                                            height: '340px',
                                            $border: `'1px solid yellow'`,
                                            $margin:`'7px 0 0 22px'`,
                                        }
                                    }
                                }
                            ]
                        },

                    ]
                },

            ]
        }
    ]
}
