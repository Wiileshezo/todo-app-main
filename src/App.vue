<script setup>
import TheFooter from './components/layout/TheFooter.vue'
import TheHeader from './components/layout/TheHeader.vue'
import TodoList from './components/todo-list/TodoList.vue'
import TodoInput from './components/todo-list/TodoInput.vue'
</script>

<template>
  <TheHeader />
  <TodoInput></TodoInput>
  <todo-list></todo-list>
  <TheFooter />
</template>

<style></style>
