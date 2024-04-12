module.exports = {
    title: '爱琴海公司安全生产档案资料',
    head:[
        ['link', { rel: 'icon', href: '/favicon.png' }]
    ],
    themeConfig: {
        logo:'/logo.png',
        smoothScroll: true,
        lastUpdated: '更新时间',
        // 导航栏设置
        nav:[
            // {text:'主页',link:'/'},
            // {text:'通知文件',link:'/safenote/'},
            // {text:'隐患排查',link:'/safety-inspection/'},
            // {text:'应急演练',link:'/yanlian-record/'}
            {
                text:'资料目录',
                items: [
                    {text:'安全生产通知文件',link: '/safenote/'},
                    {text:'安全生产规章制度',link:'/safety-rules/'},
                    {text:'安全生产隐患排查',link: '/safety-inspection/'},
                    {text:'应急演练',link:'/yanlian-record/'},
                    {text:'双重预防体系',link:'/yanlian-record/'},
                    
                ] 
            },
            {
                text:'培训资料',
                items: [
                    {text:'消防培训',link: '/safe-knowledge/'}
                ]

            }
        //     {
        //         text: '安全检查',
        //         items: [
        //              {text:'月度安全检查',link:'/safety-inspection/'}
        //         ] 
        //      },
        // ],
        // sidebar: [
        //     ['/safeproduct/1','泰旅爱物字1号'],
        //     ['/safeproduct/3','泰旅爱物字3号'],
        //     ['/safeproduct/6','泰旅爱物字6号']
        ],
        // 
        sidebar: {
            '/safenote/safeproduct':[
                ['/safenote/safeproduct/1','泰旅爱物字1号'],
                ['/safenote/safeproduct/2','泰旅爱物字2号'],
                ['/safenote/safeproduct/3','泰旅爱物字3号'],
                ['/safenote/safeproduct/4','泰旅爱物字4号'],
                ['/safenote/safeproduct/5','泰旅爱物字5号'],
                ['/safenote/safeproduct/6','泰旅爱物字6号'],
                ['/safenote/safeproduct/7','泰旅爱物字7号'],
                ['/safenote/safeproduct/8','泰旅爱物字8号'],
                ['/safenote/safeproduct/9','泰旅爱物字9号'],
                ['/safenote/safeproduct/10','泰旅爱物字10号'],
                ['/safenote/safeproduct/11','泰旅爱物字11号'],
                ['/safenote/safeproduct/12','泰旅爱物字12号']
            ],
            '/safenote/important':[
                ['/safenote/important/2','国务院安委会文件'],
                ['/safenote/important/3','国务院安委办文件'],
                ['/safenote/important/1','泰安市安委会文件'],
            
            ],
            // '/safenote':[
            //     ['/safenote/1','泰旅爱物字1号'],
            //     ['/safenote/1','泰旅爱物字1号']
            // ],
            '/safety-inspection/202403':[
                ['/safety-inspection/202403/m2-f1','3月份1楼'],
                ['/safety-inspection/202403/m2-f2','3月份2楼'],
                ['/safety-inspection/202403/m2-f3','3月份3楼'],
                ['/safety-inspection/202403/m2-f4','3月份4楼'],
                ['/safety-inspection/202403/m2-f5','3月份5楼']
            ]
        }
    }
}
