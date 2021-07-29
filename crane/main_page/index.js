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
                    width:'100vw',
                    height:'100vh'
                }
            },
            children: [
                {
                    component: 'div',
                    content: 'hello world',
                    props:{
                        $style:{
                            fontSize:200,
                            color:'blue'
                        }
                    }
                },
                {
                    component: 'div',
                    content: 'hello js',
                    props:{
                        $style:{
                            fontSize:100,
                            color:'green'
                        }
                    }
                }
            ]
        }
    ]
}
