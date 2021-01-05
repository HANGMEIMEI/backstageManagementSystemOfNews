<template>
  <div id="app">
    <h1>新闻后台管理系统</h1>
     <el-button type="primary" circle @click="handleClick">默认按钮</el-button>
     <el-button type="primary" icon="el-icon-edit" v-on:click="handleEdit"></el-button>
       <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
    <!-- 路由出口！ -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () { return { num: 1 } },
  methods: { handleClick () { console.log('lvhang') }, handleEdit () { console.log(123) }, handleChange (value) { console.log(value) } }
}
</script>

<style lang="less">

</style>
