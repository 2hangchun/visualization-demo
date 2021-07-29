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
            content: 'hello world',
            props:{
                $style: {
                    fontSize:'300px',
                    color:'red',
                    fontWeight: '800'
                }
            }
        }
    ]
}
