<script setup></script>

<template>
  <div class="display-flex align-items-center justify-content-center direction-column">
    <base-card class="display-flex direction-row border-radius add-new-task">
      <input type="radio" />

      <input
        type="text"
        placeholder="Currently typing"
        class="text-input display-flex align-items-center"
      />
    </base-card>
  </div>
</template>

<style scoped>
input {
  font-family: 'Josefin Sans', sans-serif;
}

/* Placeholder styling */
input::placeholder {
  font-family: 'Josefin Sans', sans-serif;
  opacity: 1; /* sometimes needed */
}

.text-input {
  border: 0;
}
</style>
