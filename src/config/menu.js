// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: 'feedback',
    path: 'https://github.com/alibaba/ice',
    external: true,
    newWindow: true,
    icon: 'message',
    id: 'Menu_poj38',
  },
  {
    name: 'help',
    path: 'https://alibaba.github.io/ice',
    external: true,
    newWindow: true,
    icon: 'bangzhu',
    id: 'Menu_77kh4',
  },
];

const asideMenuConfig = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: 'home2',
    children: [
      { name: 'monitor', path: '/dashboard/monitor', id: 'Menu_xw3ln' },
    ],
    id: 'Menu_5siv6',
  },
  {
    name: 'chart',
    path: '/chart',
    icon: 'chart',
    children: [
      { name: 'basic', path: '/chart/basic', id: 'Menu_ogqm3' },
      { name: 'general', path: '/chart/general', id: 'Menu_rxexp' },
    ],
    id: 'Menu_j6rje',
  },
  {
    name: '表格页',
    path: '/table',
    icon: 'cascades',
    children: [
      { name: 'basic', path: '/table/basic', id: 'Menu_4gjeq' },
      { name: 'general', path: '/table/general', id: 'Menu_kgpmp' },
    ],
    id: 'Menu_kyi2x',
  },
  {
    name: '列表页',
    path: '/list',
    icon: 'menu',
    children: [
      { name: 'basic', path: '/list/basic', id: 'Menu_k5u53' },
      { name: 'general', path: '/list/general', id: 'Menu_ejq32' },
    ],
    id: 'Menu_ac7v3',
  },
  {
    name: 'profile',
    path: '/profile',
    icon: 'content',
    children: [
      { name: 'basic', path: '/profile/basic', id: 'Menu_olk6o' },
      { name: 'terms', path: '/profile/general', id: 'Menu_eadml' },
    ],
    id: 'Menu_h1of3',
  },
  {
    name: 'result',
    path: '/result',
    icon: 'question',
    children: [
      { name: 'success', path: '/result/success', id: 'Menu_46qvm' },
      { name: 'fail', path: '/result/fail', id: 'Menu_38k00' },
    ],
    id: 'Menu_rght1',
  },
  {
    name: 'account',
    path: '/account',
    icon: 'yonghu',
    children: [{ name: 'setting', path: '/account/setting', id: 'Menu_63ak6' }],
    id: 'Menu_v5lmj',
  },
  {
    name: 'exception',
    path: '/exception',
    icon: 'notice',
    children: [
      { name: '204', path: '/exception/204', id: 'Menu_rn6ri' },
      { name: '403', path: '/exception/403', id: 'Menu_96k8o' },
      { name: '404', path: '/exception/404', id: 'Menu_jvr1o' },
      { name: '500', path: '/exception/500', id: 'Menu_o7rbs' },
    ],
    id: 'Menu_w8oda',
  },
];

export { headerMenuConfig, asideMenuConfig };
