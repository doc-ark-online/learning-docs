<!-- Comment.vue -->
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { inBrowser } from 'vitepress'
import Gitalk from 'gitalk'
import 'gitalk/dist/gitalk.css'
const commentRef = ref<HTMLElement | null>(null)

const init = () => {
  if (inBrowser) {
    const wrap = document.createElement('div')
    wrap.setAttribute('id', 'gitalk-page-container')
    commentRef.value?.appendChild(wrap) // 把组件加入到想加载的地方 // querySelector的节点可自己根据自己想加载的地方设置
    const gitTalk = new Gitalk({
      id: location.origin + location.pathname,
      repo: 'docs-comment',
      owner: 'prodigytech-doc',
      clientID: '3f32809087fa6bab81d7',
      clientSecret: 'a17c96a33f24d9ae1140824fd60202b1a1906057',
      admin: ['Metaworld2023'],
      labels: ['GitTalk'],
      createIssueManually: true
    })
    gitTalk.render('gitalk-page-container')
  }
}

onMounted(() => {
  init()
})
</script>
<template>
  <div ref="commentRef" class="commentRef"></div>
</template>
