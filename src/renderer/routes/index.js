export default [
  {
    path: '/',
    name: 'Home',
    component: require('@/page/Home').default,
    meta: {
      hidden: false,
      name: '현금정산 입력'
    }
  },
  {
    path: '/list',
    name: 'List',
    component: require('@/page/List').default,
    meta: {
      hidden: false,
      name: '정산목록'
    }
  },
  {
    path: '*',
    redirect: '/',
    meta: {
      hidden: true
    }
  }
]
