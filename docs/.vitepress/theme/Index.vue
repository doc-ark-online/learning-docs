<!-- Index.vue -->
<script setup>
import VPTheme from 'metaapp-prodigytech-doc-theme'
import Comment from './Comment.vue'
import { useRoute } from 'vitepress'
import { ref, watch } from 'vue'
const route = useRoute()
const { Layout } = VPTheme
const num = ref(0)
watch(
  () => route.path,
  () => {
    num.value++
  }
)
</script>
<template>
  <Layout>
    <!-- #doc-after 表示在每篇文章的最后位置添加 Comment组件 -->
    <template #doc-comment>
      <Comment :key="num" />
    </template>
  </Layout>
</template>
