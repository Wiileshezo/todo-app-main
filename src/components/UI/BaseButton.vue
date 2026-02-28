<script setup>
defineProps({
  type: String,
  mode: String,
})
</script>

<template>
  <button :type="type" :class="mode">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  border: none;
  background: transparent;
  color: var(--Navy850);
  font-family: 'Josefin Sans', sans-serif;
  cursor: pointer;
}

button:hover,
button:active {
  color: var(--Blue500);
}

.circle {
  padding: 0.6rem;
  border: solid 1px var(--divider);
  border-radius: 50%;
}
.circle:hover,
.circle:active {
  background-image:
    url('@/images/icon-check.svg'),
    linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
  background-repeat: no-repeat;
  background-position: center;
}

@media screen and (min-width: 768px) {
}
</style>
