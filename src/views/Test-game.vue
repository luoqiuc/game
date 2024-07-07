<template>
  <div id="app">
    <div class="nes-container">
      <select v-model="selectedGame" @change="loadGame">
        <option v-for="(game, index) in games" :key="index" :value="game.path">{{ game.name }}</option>
      </select>
      <nes-vue v-if="selectedGame" :url="selectedGame" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { NesVue } from 'nes-vue';

const selectedGame = ref('');
const games = [
  { name: '1942 (简)', path: '/roms/1942 (简)' },
  { name: 'F1赛车 (简)', path: '/roms/F1赛车 (简)' },
  // 添加更多游戏选项...
];

const loadGame = () => {
  // 可以在这里添加加载游戏时的逻辑，比如显示加载状态或者其他处理
};
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 使容器占满整个视口高度 */
}

.nes-container {
  width: 80%; /* 容器宽度设置为视口宽度的80% */
  height: 80vh; /* 容器高度设置为视口高度的80% */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* 垂直居中显示 */
}

nes-vue {
  width: 100%;
  height: 100%;
  object-fit: contain; /* 让内容自适应容器大小 */
}

select {
  margin-bottom: 1rem;
}
</style>
