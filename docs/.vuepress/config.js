module.exports = {
    title: '内部文档',
    head:[
        ['link', { rel: 'icon', href: '/favicon.png' }]
    ],
    themeConfig: {
        logo:'/logo.png',
        smoothScroll: true,
        nav:[
            {text:'主页',link:'/'},
            {
                text:'通知文件',
                items: [
                    {text:'安全生产',link: '/safeproduct/'},
                    {text:'通报',link: '/safenote/'}
                ] 
            },
            {
                text: '安全检查',
                items: [
                     {text:'月度安全检查',link:'/safety-inspection/'}
                ] 
             },
        ],
        // sidebar: [
        //     ['/safeproduct/1','泰旅爱物字1号'],
        //     ['/safeproduct/3','泰旅爱物字3号'],
        //     ['/safeproduct/6','泰旅爱物字6号']
        // ]
        // 
        sidebar: {
            '/safeproduct':[
                ['/safeproduct/1','泰旅爱物字1号'],
                ['/safeproduct/3','泰旅爱物字3号'],
                ['/safeproduct/6','泰旅爱物字6号'],
                ['/safeproduct/10','泰旅爱物字10号'],
            ],
            '/safenote':[
                ['/safenote/1','泰旅爱物字1号']
            ],
            '/safety-inspection':[
                ['/safety-inspection/m2-f1','2月份1楼'],
                ['/safety-inspection/m2-f2','2月份2楼'],
                ['/safety-inspection/m2-f2','2月份3楼'],
                ['/safety-inspection/m2-f2','2月份4楼'],
                ['/safety-inspection/m2-f2','2月份5楼']

            ]
        }
    }
}
