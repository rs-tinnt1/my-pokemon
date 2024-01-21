

<template>
  <div class="w-full h-screen bg-primary flex flex-col items-center justify-center">
    <h1 class="text-7xl text-secondary">Poke Memories</h1>
    <h2 class="text-3xl text-secondary">Select mode to start game</h2>
    <div class="flex mt-8">
      <button v-for="mode in modes" @click="handleStart(mode.size)" class="w-[150px] h-[150px] bg-transparent border-[1px] border-solid border-secondary text-secondary text-3xl flex flex-col items-center justify-center cursor-pointer rounded-2xl my-0 mx-4 hover:bg-secondary hover:text-primary">
        <span>{{mode.size}}x{{mode.size}}</span>
        <span class="text-lg">{{mode.name}}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const modes = [{
  size: 4,
  name: 'Easy'
}, {
  size: 6,
  name: 'Normal'
}, {
  size: 8,
  name: 'Hard'
}, {
  size: 10,
  name: 'Super Hard'
}]

const emits = defineEmits<{
  (e: 'onStart', totalOfBlocks: number): (totalOfBlocks: number) => void
}>()

const handleStart = (size: number) => {
  const totalOfBlocks = size*size
  emits('onStart', totalOfBlocks)
}
</script>

