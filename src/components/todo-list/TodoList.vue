<script setup>
import TodoFilters from './TodoFilters.vue'
import { useTodoLists } from '@/stores/todoStore'

const todoLists = useTodoLists()
</script>

<template>
  <div class="display-flex justify-content-center border-radius">
    <ul
      class="todo-container display-flex align-items-center justify-content-center direction-column"
    >
      <li v-for="todo in todoLists.todos" :key="todo.id">
        <base-card class="border-bottom">
          <input type="radio" />
          <p>{{ todo.title }}</p>
        </base-card>
      </li>
      <todo-filters></todo-filters>
    </ul>
  </div>
</template>

<style scoped>
.todo-container {
  margin-top: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  width: fit-content;
}
.border-bottom {
  border-bottom: solid 1px var(--Gray300);
}

ul {
  list-style: none;
}
</style>
