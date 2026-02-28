<script setup>
import { ref, computed, onMounted } from 'vue'

const isDark = ref(false)

function toggleTheme() {
  isDark.value = !isDark.value
  applyTheme()
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

function applyTheme() {
  const root = document.documentElement
  if (isDark.value) {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}

const themeIcon = computed(() => {
  return isDark.value
    ? new URL('@/images/icon-sun.svg', import.meta.url).href
    : new URL('@/images/icon-moon.svg', import.meta.url).href
})

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark') {
    isDark.value = true
    applyTheme()
  }
})
</script>

<template>
  <div class="container-background"></div>
  <div class="display-flex align-items-center direction-column">
    <div class="header display-flex align-items-center justify-content-center">
      <h1 class="title">T O D O</h1>
      <button class="theme-btn" @click="toggleTheme">
        <img :src="themeIcon" alt="theme icon" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.container-background {
  background-image: var(--bg-image);
  background-size: cover;
  position: fixed;
  background-position: top center;
  background-repeat: no-repeat;
  height: 40vh;
  width: 100vw;
}

.header {
  margin-block: 14vh 3vh;
  justify-content: space-between;
  width: 86vw;
  z-index: 999;
}
.title {
  color: var(--Gray50);
  font-weight: 700;
  font-size: 2.5rem;
}
.theme-btn {
  border: none;
  background: transparent;
}

@media screen and (min-width: 768px) {
  .header {
    width: 50vw;
  }
  .title {
    font-size: 3rem;
  }
}
@media screen and (min-width: 1024px) {
  .header {
    width: 38vw;
  }
}
</style>
