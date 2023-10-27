<!-- Comment.vue -->
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { inBrowser } from 'vitepress'
import Gitalk from 'gitalk'
import 'gitalk/dist/gitalk.css'
import Spark from 'spark-md5'
const commentRef = ref<HTMLElement | null>(null)

const init = () => {
  if (inBrowser) {
    const wrap = document.createElement('div')
    wrap.setAttribute('id', 'gitalk-page-container')
    commentRef.value?.appendChild(wrap) // 把组件加入到想加载的地方 // querySelector的节点可自己根据自己想加载的地方设置
    const gitTalk = new Gitalk({
      id: Spark.hash(location.origin + location.pathname),
      repo: 'docs-comment',
      owner: 'prodigytech-doc',
      clientID: '28d83eba645956ddd8d7',
      clientSecret: '2633cedb6cbb7c237d0e6097a01e8f198339da25',
      admin: ['Metaworld2023', 'xuxchao'],
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
