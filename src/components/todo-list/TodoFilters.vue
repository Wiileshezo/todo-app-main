<script setup></script>

<template>
  <base-card class="display-flex direction-row align-items-center">
    <base-button>5 items left</base-button>
    <!-- <div class="display-flex direction-row align-items-center">
      <base-button>All</base-button>
      <base-button>Active</base-button>
      <base-button>Completed</base-button>
    </div> -->
    <base-button>Clear Completed</base-button>
  </base-card>
</template>

<style scoped>
div {
  justify-content: space-between;
  gap: 1rem;
}
</style>
