<template>
  <div id="app">
    <el-header class="header">
      <header-principal />
    </el-header>
    <el-main>
      <el-container>
        <el-aside width="200px">
          <menu-principal />
        </el-aside>
        <el-container>
          <router-view/>
        </el-container>
      </el-container>
    </el-main>
  </div>
</template>

<script>
import Menu from "./components/menu/Menu";
import Header from "./components/header/Header";
export default {
  name: 'App',
  components:{
    'menu-principal' : Menu,
    'header-principal' : Header
  }
}
</script>

<style>
</style>
