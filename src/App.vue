<script setup>
import TheFooter from './components/layout/TheFooter.vue'
import TheHeader from './components/layout/TheHeader.vue'
import TodoList from './components/todo-list/TodoList.vue'
import TodoInput from './components/todo-list/TodoInput.vue'
import TodoFilters from './components/todo-list/TodoFilters.vue'
</script>

<template>
  <TheHeader />
  <TodoInput></TodoInput>
  <todo-list></todo-list>
  <todo-filters></todo-filters>
  <TheFooter />
</template>

<style></style>
