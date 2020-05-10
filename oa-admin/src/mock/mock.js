import Mock from 'mockjs'

let data = Mock.mock('http://www.xiaoyuantech.com/getBannerList', {
    'list|1-10': [{
        'id|+1': 1,
        'name': '@ctitle',
        'status|1-2': true
    }]
})

