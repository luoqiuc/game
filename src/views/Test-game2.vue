<template>
  <div>
    <select v-model="selectedGame" @change="loadGame">
      <option value="">Select a game</option>
      <option v-for="game in gamesData.games" :key="game" :value="game">{{ game }}</option>
    </select>
    <div class="nes-container" v-if="gameUrl">
      <nes-vue :url="gameUrl"  width="520" height="480" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NesVue } from 'nes-vue';

const gamesData = ref({ games: [] });
const selectedGame = ref('');
const gameUrl = ref('');

onMounted(async () => {
  try {
    const response = await fetch('/games.json');
    const data = await response.json();
    gamesData.value = data;
  } catch (error) {
    console.error('Failed to fetch games data:', error);
  }
});

const loadGame = () => {
  if (selectedGame.value) {
    gameUrl.value = `/roms/${selectedGame.value}`;
  } else {
    gameUrl.value = '';
  }
};
</script>

<style>
.nes-container {
  width: 520px;
  height: 480px;
  background-color: #000;
  margin: auto;
  position: relative;
  overflow: hidden;
}

.nes-container canvas {
  display: inline-block;
  height: 480px;
  width: 520px;
}
</style>
