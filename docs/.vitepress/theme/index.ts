import VPTheme from 'metaapp-prodigytech-doc-theme'
import LayoutIndex from './Index.vue'
import codeblocksFold from 'vitepress-plugin-codeblocks-fold' // 导入方法
import 'vitepress-plugin-codeblocks-fold/style/index.scss' // 导入样式
import { useData, useRoute } from 'vitepress'
import './style.css'

import 'gitalk/dist/gitalk.css'

export default {
  ...VPTheme,
  enhanceApp(ctx) {
    VPTheme.enhanceApp(ctx)
    // ...
  },
  Layout: LayoutIndex,
  setup() {
    // 获取前言和路由
    const { frontmatter } = useData()
    const route = useRoute()
    // 基础使用
    codeblocksFold({ route, frontmatter }, true, 400)
  }
}
