<script setup>
import TodoFilters from './TodoFilters.vue'
import { useTodoLists } from '@/stores/todoStore'

const todoLists = useTodoLists()
</script>

<template>
  <div class="display-flex justify-content-center border-radius">
    <ul class="todo-container display-flex justify-content-center direction-column border-radius">
      <li v-for="todo in todoLists.todos" :key="todo.id" class="border-radius">
        <base-card class="border-bottom">
          <base-button mode="circle"></base-button>
          <p>{{ todo.title }}</p>
        </base-card>
      </li>
      <todo-filters></todo-filters>
    </ul>
  </div>
</template>

<style scoped>
.todo-container {
  background-color: var(--card-bg);
  margin-top: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  z-index: 999;
}
.border-bottom {
  border-bottom: solid 1px var(--divider);
}

ul {
  list-style: none;
}
</style>
