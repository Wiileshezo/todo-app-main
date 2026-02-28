<script setup></script>

<template>
  <div class="card display-flex direction-row">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  padding: 1.2rem;
  width: 80vw;
  background: var(--card-bg);
  gap: 1rem;
  z-index: 999;
}

@media screen and (min-width: 768px) {
  .card {
    width: 50vw;
  }
}
@media screen and (min-width: 1024px) {
  .card {
    width: 35vw;
  }
}
</style>
