<script setup></script>

<template>
  <div class="card display-flex direction-row border-radius">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  padding: 1.5rem;
  width: 35vw;
  background: var(--Gray50);
  gap: 1rem;
}
</style>
