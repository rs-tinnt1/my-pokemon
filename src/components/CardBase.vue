<template>
    <div
        class="inline-block w-full h-full"
    >
        <div
        class="card__inner rounded-2xl"
      :class="{ 'is-flipped': props.isOpen, 'bg-primary': !props.isOpen,
            'bg-secondary': props.isOpen, }"
        @click="handleFlipCard()"
        >
        <div class="card__face card__face--back">
            <div
            class="card__content"
            :style="{
                backgroundImage: `url('assets/${cardBackground}')`,
            }"
            ></div>
        </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
// declare const require: any

const props = defineProps({
    isOpen: {
    type: Boolean,
    required: false,
  },
  cardId: {
    type: Number,
    required: true,
  },
  cardsMap: {
    type: Object,
    required: true,
  }
})

const emits = defineEmits<{
    (e: 'onFlip'): () => void
}>()


const handleFlipCard = () => {
    emits('onFlip')
}

const cardBackground = computed(() => {
    return props.isOpen ? `images/${props.cardId}.png` : 'images/icon_back.png'
})

</script>

<style scoped>

.card__inner {
width: 100%;
height: 100%;
transition: transform 1s;
transform-style: preserve-3d;
cursor: pointer;
position: relative;
}

.card.disabled .card__inner {
cursor: default;
}

.card__inner.is-flipped {
transform: rotateY(-180deg);
}

.card__face {
position: absolute;
width: 100%;
height: 100%;
/* backface-visibility: hidden; */
overflow: hidden;
border-radius: 1rem;
padding: 1rem;
box-shadow: 0 3px 18px 3px rgba(0, 0, 0, 0.2);
}

.card__face--front .card__content {
background: url("../assets/images/icon_back.png") no-repeat center center;
height: 100%;
width: 100%;
}

.card__face--back {
background-color: var(--light);
transform: rotateY(-180deg);
}

.card__face--back .card__content {
background-position: center center;
background-repeat: no-repeat;
background-size: contain;
height: 100%;
width: 100%;
}
</style>
