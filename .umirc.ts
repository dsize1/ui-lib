import { defineConfig } from 'dumi';
let BaseUrl = '';
export default defineConfig({
  mode: 'site', // site: 站点模式（导航头 + 左侧菜单 + 右侧内容）。 doc：文档
  title: 'UI Library', // 组件库名称
  favicon: BaseUrl + '/images/logo.png',
  logo: BaseUrl + '/images/logo.png',
  description: '前端组件开发。',
  // more config: https://d.umijs.org/config
});
