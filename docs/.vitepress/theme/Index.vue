<!-- Index.vue -->
<script setup>
import VPTheme from 'metaapp-prodigytech-doc-theme'
import Comment from './Comment.vue'

const { Layout } = VPTheme
</script>
<template>
  <Layout>
    <!-- #doc-after 表示在每篇文章的最后位置添加 Comment组件 -->
    <template #doc-comment>
      <Comment />
    </template>
  </Layout>
</template>
