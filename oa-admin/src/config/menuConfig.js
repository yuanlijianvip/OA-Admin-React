const menuList = [
    {
        title: "欢迎",
        path: './home',
        icon: ''
    },
    {
        title: "轮播库信息",
        path: '/banner',
        icon: ''
    },
    {
        title: "用户管理",
        path: '/user',
        icon: '',
        children: [
            {
                title: "创建用户",
                path: '/user/add'
            },
            {
                title: "用户列表",
                path: '/user/list'
            }
        ]
    },  
    {
        title: "课程分类",
        path: '/classify',
        icon: '',
        children: [
            {
                title: "分类列表",
                path: "/classify/list"
            }
        ]
    }            

]

export default menuList