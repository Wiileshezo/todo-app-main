<script setup>
import TheFooter from './components/layout/TheFooter.vue'
import TheHeader from './components/layout/TheHeader.vue'
import TodoItem from './components/todo-list/TodoItem.vue'
import TodoInput from './components/todo-list/TodoInput.vue'
</script>

<template>
  <header>
    <TheHeader />
    <TodoInput></TodoInput>
    <todo-item></todo-item>
  </header>
  <TheFooter />
</template>

<style>
header {
  background-image: url('@/images/bg-desktop-light.jpg');
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  position: fixed;
  height: 40vh;
  width: 100vw;
}
</style>
