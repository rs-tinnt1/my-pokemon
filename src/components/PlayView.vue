<template>
  <div class="w-full h-screen absolute top-0 left-0 z-2 bg-primary py-[8px]">
    <div
      class="grid gap-[8px] h-full  m-auto"
      :style="{
        width: `${(windowHeight*2/3 )+ (8*Math.sqrt(totalOfBlocks))}px`,
        gridTemplateColumns: `repeat(${Math.sqrt(totalOfBlocks)}, 1fr)`,
      }"
    >
      <card-base
        v-for="(cardId, index) in cardsContext"
        :key="cardId"
        :cardId="cardId"
        :cardsMap="cardsMap"
        :isOpen="cardsMap[cardId]?.includes(index)"
        @onFlip="() => {
          // if card not flipped, flip it; else do nothing
          !cardsMap[cardId]?.includes(index) && handleFlipCard(cardId, index)
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import CardBase from './CardBase.vue';

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

const emits = defineEmits<{
  (e: 'finish'): () => void
}>()

const cardsMap = ref<Record<number, Array<number>>>({})
const checkRule = ref<Array<number>>([])

watch(cardsMap.value, (newVal) => {
  console.log('TEST cardsMap', newVal)
  if(Object.keys(cardsMap.value).length === (props.totalOfBlocks/2)) {
    cardsMap.value = {}
    emits('finish')
  }
})

watch(checkRule.value, (newVal) => {
  console.log('TEST checkRule', newVal)
  if (newVal.length < 2) {
    return
  }
  setTimeout(() => {
    if(newVal[0] !== newVal[1]) {
      // if not match, flip back; remove key-value pair from map
      const newMap = cardsMap.value
      console.log('TEST 1 newMap', newMap)
      delete newMap[newVal[0]]
      delete newMap[newVal[1]]
      console.log('TEST 2 newMap', newMap)
      cardsMap.value = newMap
    }
    console.log('RESET')
    checkRule.value = []
  }, 1000)
})

const handleFlipCard = (cardId: number, index: number) => {
  console.log('checkRule.value', checkRule.value)
  if (checkRule.value.length >= 2) {
    return
  }
  checkRule.value.push(cardId)

  // handle track card in map
  if(cardsMap.value[cardId]) {
    // if not exist, create new key-value 
    console.log('VAO day')
    cardsMap.value[cardId].push(index)
  } else {
    console.log('VAO kia')
    // if exist, push new value to array
    cardsMap.value[cardId] = [index]
  }
}
</script>
