<template>
  <div>
    <van-cell title="欢迎" label="这是移动端首页" />
    <van-button block @click="toUser">去用户页</van-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const toUser = () => router.push('/user')
console.info('----------进入这个页面-- mobile--home.vue-------------------')
</script>
