<script setup>
import { useTodoLists } from '@/stores/todoStore'

const todoLists = useTodoLists()
</script>

<template>
  <div class="display-flex justify-content-center border-radius">
    <ul class="todo-container display-flex justify-content-center direction-column border-radius">
      <li v-for="todo in todoLists.todos" :key="todo.id">
        <base-card class="border-bottom border-radius">
          <base-button mode="circle"></base-button>
          <p>{{ todo.title }}</p>
        </base-card>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.todo-container {
  background-color: var(--card-bg);
  margin-top: 1.5rem;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
  z-index: 999;
}
.border-bottom {
  border-bottom: solid 1px var(--divider);
  align-items: flex-start;
}

ul {
  list-style: none;
}
</style>
