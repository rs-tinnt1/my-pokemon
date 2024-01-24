<template>
  <div class="w-full h-screen absolute top-0 left-0 z-2 bg-primary flex items-center justify-center flex-col">
    <h1 class="text-7xl font-bold text-secondary">✨ Congratulations ✨</h1>
    <h2 class="block text-3xl leading-tight font-bold my-2">🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓</h2>
    <h3 class="text-4xl font-bold text-secondary mt-6">{{ Math.round(props.timer / 920) }} seconds</h3>
    <button class="shadow-none m-4 text-xl px-5 py-4 cursor-pointer border border-1 border-secondary bg-primary hover:bg-secondary rounded-lg text-secondary hover:text-primary transition duration-300 ease-in-out" @click="onStartAgain">Start Again</button>
  </div>
</template>


<script setup lang="ts">
  const props = defineProps({
    timer: {
      type: Number,
      default: 0,
    },
  })

  const emits = defineEmits<{
    (e: 'onStartAgain'): () => void
  }>()

  const onStartAgain = () => {
    emits('onStartAgain')
  }
</script>