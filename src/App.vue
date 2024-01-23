<template>
  <HomeView v-if="page === EPage.HOME" @onStart="handleStart" />
  <PlayView v-if="page === EPage.PLAY" :totalOfBlocks="settings.totalOfBlocks" :cardsContext="settings.cardsContext" @onFinish="handleFinish" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HomeView from './components/HomeView.vue';
import PlayView from './components/PlayView.vue';

import { EPage, ISettings } from './constants';

const page = ref<EPage>(EPage.HOME)

const settings = ref<ISettings>({
  totalOfBlocks: 0,
  cardsContext: [],
  startedAt: null,
});

const shuffled = (list: number[]) => list.sort(() => Math.random() - 0.5);

/** handle setting and generate cards to start the game */
const handleStart = (totalOfBlocks: number) => {
  settings.value.totalOfBlocks = totalOfBlocks;
  page.value = EPage.PLAY;
  const firstCards = Array.from(
        { length: totalOfBlocks / 2 },
        (_, i) => i + 1
      );
      const secondCards = [...firstCards];
      const cards = [...firstCards, ...secondCards];
    settings.value.cardsContext = shuffled(cards);
    settings.value.startedAt = new Date().getTime();
}

/** handle finish game */
const handleFinish = () => {
  page.value = EPage.HOME;
  settings.value.totalOfBlocks = 0;
  settings.value.cardsContext = [];
  settings.value.startedAt = null;
}
</script>
