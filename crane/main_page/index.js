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
            props:{
                class:'container',
                $style: {
                    width:'1920px',
                    height:'1080px'
                }
            },
            children: [
                {
                    component: 'div',
                    content: 'hello world',
                    props:{
                        $style:{
                            fontSize:'200px',
                            color:'blue'
                        }
                    }
                },
                {
                    component: 'div',
                    content: 'hello js',
                    props:{
                        $style:{
                            fontSize:'100px',
                            color:'green'
                        }
                    }
                }
            ]
        }
    ]
}
