<template>
  <div id="app">
    <div class="nes-container">
      <select v-model="selectedGame" @change="loadGame">
        <option v-for="(game, index) in games" :key="index" :value="game.path">{{ game.name }}</option>
      </select>
      <nes-vue v-if="selectedGame" :url="selectedGame" width="520" height="480" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NesVue } from 'nes-vue';

const selectedGame = ref('');
const games = [
{ name: '隋唐演义 (简)', path: '/roms/隋唐演义 (简)' },
{ name: '雪人兄弟 (简)', path: '/roms/雪人兄弟 (简)' },
{ name: '霹雳神兵 (简)', path: '/roms/霹雳神兵 (简)' },
{ name: '风云 (简)', path: '/roms/风云 (简)' },
{ name: '飞人战士 (简)', path: '/roms/飞人战士 (简)' },
{ name: '马戏团 (修正版) (简)', path: '/roms/马戏团 (修正版) (简)' },
{ name: '马里奥兄弟 (简)', path: '/roms/马里奥兄弟 (简)' },
{ name: '马里奥医生 (v2.0) (简)', path: '/roms/马里奥医生 (v2.0) (简)' },
{ name: '高桥名人的冒险岛 (繁)', path: '/roms/高桥名人的冒险岛 (繁)' },
{ name: '高桥名人的冒险岛2 (修正版) (简)', path: '/roms/高桥名人的冒险岛2 (修正版) (简)' },
{ name: '高桥名人的冒险岛3 (简)', path: '/roms/高桥名人的冒险岛3 (简)' },
{ name: '高桥名人的冒险岛4 (v3.0) (简)', path: '/roms/高桥名人的冒险岛4 (v3.0) (简)' },
{ name: '魂斗罗 (简)', path: '/roms/魂斗罗 (简)' },
{ name: '魂斗罗力量 (简)', path: '/roms/魂斗罗力量 (简)' },
{ name: '魔城传说2 - 大魔司教加里奥斯 (v2.2) (简)', path: '/roms/魔城传说2 - 大魔司教加里奥斯 (v2.2) (简)' },
{ name: '魔域英雄传 (简)', path: '/roms/魔域英雄传 (简)' },
{ name: '魔塔 (简)', path: '/roms/魔塔 (简)' },
{ name: '魔幻三国志 (简)', path: '/roms/魔幻三国志 (简)' },
{ name: '魔法总动员 (修正版) (简)', path: '/roms/魔法总动员 (修正版) (简)' },
{ name: '魔法门 - 英雄无敌 (简)', path: '/roms/魔法门 - 英雄无敌 (简)' },
{ name: '魔神法师 (简)', path: '/roms/魔神法师 (简)' },
{ name: '魔神英雄传外传 (v2.0) (简)', path: '/roms/魔神英雄传外传 (v2.0) (简)' },
{ name: '魔道劫 (简)', path: '/roms/魔道劫 (简)' },
{ name: '魔道士阴谋 (修正版) (简)', path: '/roms/魔道士阴谋 (修正版) (简)' },
{ name: '麻雀 (v1.1a) (简)', path: '/roms/麻雀 (v1.1a) (简)' },
{ name: '黑客 (简)', path: '/roms/黑客 (简)' },
{ name: '黑白棋 (v1.0) (简)', path: '/roms/黑白棋 (v1.0) (简)' },
{ name: '龙之谷 (繁)', path: '/roms/龙之谷 (繁)' },
{ name: '龙珠英雄 (简)', path: '/roms/龙珠英雄 (简)' },
{ name: '龙魂 (简)', path: '/roms/龙魂 (简)' },
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
