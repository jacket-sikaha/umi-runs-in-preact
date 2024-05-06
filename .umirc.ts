import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  hash: true,
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  analyze: {},
  chainWebpack: (memo, { webpack, env }) => {
    // 配置别名，对 import 语句的 source 做映射。
    memo.resolve.alias
      .set('react', 'preact/compat')
      .set('react-dom/test-utils', 'preact/test-utils')
      .set('react-dom', 'preact/compat')
      .set('react/jsx-runtime', 'preact/jsx-runtime');
    return memo;
  },
  // extraBabelPresets: [
  //   [
  //     '@babel/preset-react',
  //     {
  //       pragma: 'h',
  //       pragmaFrag: 'Fragment',
  //       // runtime: 'automatic', // defaults to classic
  //       development: true,
  //     },
  //   ],
  // ],
  npmClient: 'pnpm',
});
