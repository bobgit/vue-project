<template>
<div>
<el-card>
<h2>欢迎来到 PC 端</h2>
<el-button type="primary" @click="toDashboard">进入 Dashboard</el-button>
</el-card>
</div>
</template>


<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const toDashboard = () => router.push('/dashboard')
console.info('Pc/Home.vue----------进入这个页面-- pc--home.vue-------------------')
</script>
