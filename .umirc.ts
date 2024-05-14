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
    // memo.resolve.alias
    //   .set('react', 'preact/compat')
    //   .set('react-dom/test-utils', 'preact/test-utils')
    //   .set('react-dom', 'preact/compat')
    //   .set('react/jsx-runtime', 'preact/jsx-runtime');

    // memo.module
    //   .rule('exclude-nutui-react')
    //   .exclude.add(/node_modules[\\/]@nutui[\\/]nutui-react[\\/]/)
    //   .end()
    //   .resolve.alias.set('react', 'react')
    //   .set('react-dom/test-utils', 'react/test-utils')
    //   .set('react-dom', 'react')
    //   .set('react/jsx-runtime', 'react/jsx-runtime');

    memo.module
      .rule('js')
      .include.add('src')
      .end()
      .resolve.alias.set('react', 'preact/compat')
      .set('react-dom/test-utils', 'preact/test-utils')
      .set('react-dom', 'preact/compat')
      .set('react/jsx-runtime', 'preact/jsx-runtime');
    return memo;
  },
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: '@nutui/nutui-react',
        libraryDirectory: 'dist/esm',
        style: 'css',
        camel2DashComponentName: false,
      },
      'nutui-react',
    ],
  ],
  npmClient: 'pnpm',
});
