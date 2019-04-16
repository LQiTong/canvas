// var dataSet = {
//     name: '药店贷款经营分析管理系统',
//     children: [
//         { name: '首页' },
//         {
//             name: '药店评估',
//             children: [
//                 { name: '直营总部价值评估' },
//                 { name: '门店价值评估' },
//                 { name: '总部流动资金需求额度测算' },
//                 { name: '总部新店建设需求额度测算' },
//                 { name: '门店装修资金需求额度测算' },
//                 { name: '批量门店价值评估' }
//             ]
//         },
//         { name: '总店管理' },
//         { name: '门店管理' },
//         { name: '授信管理' },
//         { name: '贷款管理' },
//         {
//             name: '贷后管理',
//             children: [
//                 { name: '预警列表' },
//                 { name: '总部风险监控' },
//                 { name: '门店风险监控' },
//                 { name: '监控查询' },
//             ]
//         },
//         { name: '尽调管理' },
//         {
//             name: '明细查询',
//             children: [
//                 { name: '销售明细' },
//                 { name: '采购明细' },
//                 { name: '退货明细' },
//             ]
//         },
//         {
//             name: '系统管理',
//             children: [
//                 { name: '角色管理' },
//                 { name: '用户管理' }
//             ]
//         }
//     ]
// }
var data = {
    id: '1',
    title: '药店贷款经营分析管理系统',
    subweb: [
        {
            id: '2',
            title: '首页'
        },
        {
            id: '3',
            title: '药店评估',
            subweb: [
                {
                    id: '301',
                    title: '直营总部价值评估'
                },
                {
                    id: '302',
                    title: '门店价值评估'
                },
                {
                    id: '303',
                    title: '总部流动资金需求额度测算'
                },
                {
                    id: '304',
                    title: '总部新店建设需求额度测算'
                },
                {
                    id: '305',
                    title: '门店装修资金需求额度测算'
                },
                {
                    id: '306',
                    title: '批量门店价值评估'
                }
            ]
        },
        {
            id: '4',
            title: '总店管理'
        },
        {
            id: '5',
            title: '门店管理'
        },
        {
            id: '6',
            title: '授信管理'
        },
        {
            id: '7',
            title: '贷款管理'
        },
        {
            id: '8',
            title: '贷后管理',
            subweb: [
                {
                    id: '801',
                    title: '预警列表'
                },
                {
                    id: '802',
                    title: '总部风险监控'
                },
                {
                    id: '803',
                    title: '门店风险监控'
                },
                {
                    id: '804',
                    title: '监控查询'
                },
            ]
        },
        {
            id: '9',
            title: '尽调管理'
        },
        {
            id: '10',
            title: '明细查询',
            subweb: [
                {
                    id: '1001',
                    title: '销售明细'
                },
                {
                    id: '1002',
                    title: '采购明细'
                },
                {
                    id: '1002',
                    title: '退货明细'
                },
            ]
        },
        {
            id: '11',
            title: '系统管理',
            subweb: [
                {
                    id: '1101',
                    title: '角色管理'
                },
                {
                    id: '1102',
                    title: '用户管理'
                }
            ]
        }
    ]
}
var dataFormat = {
    name: function (data) {
        return '<input type="hidden" value="' + data.id + '">' + data.title;
    },
    childName: 'subweb'
}
console.log(dataFormat)
tree.setData('body', data, dataFormat);