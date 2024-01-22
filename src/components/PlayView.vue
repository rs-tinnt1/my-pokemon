<template>
  <div class="w-full h-screen absolute top-0 left-0 z-2 bg-primary">
    <div
      class="grid gap-[8px]"
      :class="
        `grid-cols-${Math.sqrt(totalOfBlocks)}`
      "
      :style="{
        width: `${(windowHeight*2/3 )+ (8*Math.sqrt(totalOfBlocks))}px`,
      }"
    >
      <card
        v-for="(cardId, index) in cardsContext"
        :key="cardId"
        :cardId="cardId"
        :cardsMap="cardsMap"
        :isOpen="cardsMap[cardId].includes(index)"
        @onFlip="() => handleFlipCard(cardId, index)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const windowHeight = window.innerHeight

const props = defineProps({
  totalOfBlocks: {
    type: Number,
    required: true,
  },
  cardsContext: {
    type: Array<number>,
    required: true,
  },
})

const generateCardsMap = (totalOfBlocks: number) => {
  const cardsMap: Record<number, Array<number>> = {}
  for (let i = 0; i < totalOfBlocks; i++) {
    cardsMap[i] = []
  }
  return cardsMap
}

const cardsMap = ref<Record<number, Array<number>>>({})

onMounted(()=> {
  cardsMap.value = generateCardsMap(props.totalOfBlocks)
}) 

const handleFlipCard = (cardId: number, index: number) => {
  cardsMap.value[cardId].push(index)
}

</script>
