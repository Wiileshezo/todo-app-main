<script setup></script>

<template>
  <div class="input-card display-flex align-items-center justify-content-center direction-column">
    <base-card class="display-flex direction-row border-radius add-new-task">
      <base-button mode="circle"></base-button>
      <input
        type="text"
        placeholder="Create a new todo"
        class="text-input display-flex align-items-center"
      />
    </base-card>
  </div>
</template>

<style scoped>
.input-card {
  z-index: 999;
}
input {
  font-family: 'Josefin Sans', sans-serif;
}

/* Placeholder styling */
input::placeholder {
  font-family: 'Josefin Sans', sans-serif;
  opacity: 1; /* sometimes needed */
}

.text-input {
  background: var(--card-bg);
  color: var(--text-color);
  border: none;
  outline: none;
  width: 70vw;
  box-sizing: border-box;
  transition: 0.3s ease;
}

@media screen and (min-width: 768px) {
  .text-input {
    width: 50vw;
  }
}
@media screen and (min-width: 1024px) {
  .text-input {
    width: 38vw;
  }
}
</style>
