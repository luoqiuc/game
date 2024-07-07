<template>
  <div id="app">
    <header>
      <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

      <nav>
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
        <RouterLink to="/test-game">测试游戏</RouterLink>
        <RouterLink to="/test-game2">测试游戏2</RouterLink>
        <!-- 其他链接 -->
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'

</script>

<style scoped>
/* 样式调整 */
header {
  background-color: #f0f0f0;
  padding: 1rem 0;
  text-align: center;
}

.logo {
  display: block;
  margin: 0 auto;
  width: 125px;
  height: 125px;
}

nav {
  margin-top: 1rem; /* 调整导航菜单与logo之间的间距 */
}

nav a {
  display: inline-block;
  padding: 0.5rem 1rem;
  color: #333;
  text-decoration: none;
}

nav a.router-link-exact-active {
  font-weight: bold;
  color: #000;
}
</style>
