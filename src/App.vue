<script setup>
import TheFooter from './components/layout/TheFooter.vue'
import TheHeader from './components/layout/TheHeader.vue'
import TodoList from './components/todo-list/TodoList.vue'
import TodoInput from './components/todo-list/TodoInput.vue'
</script>

<template>
  <header>
    <TheHeader />
    <TodoInput></TodoInput>
    <todo-list></todo-list>
    <TheFooter />
  </header>
</template>

<style>
header {
  background-image: url('@/images/bg-desktop-light.jpg');
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  height: 40vh;
  width: 100vw;
}
</style>
