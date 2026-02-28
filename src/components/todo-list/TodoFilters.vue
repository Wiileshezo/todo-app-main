<script setup></script>

<template>
  <div class="display-flex justify-content-center">
    <base-card class="filter-container display-flex border-radius">
      <base-button>5 items left</base-button>
      <div class="display-flex direction-row align-items-center desktop-middle-container">
        <base-button>All</base-button>
        <base-button>Active</base-button>
        <base-button>Completed</base-button>
      </div>
      <base-button>Clear Completed</base-button>
    </base-card>
  </div>

  <div class="display-flex justify-content-center">
    <base-card
      class="mobile-middle-container display-flex direction-row align-items-center border-radius"
    >
      <div class="display-flex direction-row align-items-center">
        <base-button>All</base-button>
        <base-button>Active</base-button>
        <base-button>Completed</base-button>
      </div>
    </base-card>
  </div>
</template>

<style scoped>
div {
  gap: 1rem;
}
.filter-container {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.26);
  justify-content: space-between;
}

.desktop-middle-container {
  display: none;
}
.mobile-middle-container {
  margin-top: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  justify-content: space-evenly;
  display: flex;
}

@media (min-width: 768px) {
  .mobile-middle-container {
    display: none;
  }
  .desktop-middle-container {
    justify-content: space-between;
    display: flex;
  }
}
</style>
