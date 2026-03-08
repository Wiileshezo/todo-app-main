<script setup>
import { useTodoLists } from '@/stores/todoStore'

const todoLists = useTodoLists()
</script>

<template>
  <div class="display-flex justify-content-center border-radius">
    <ul class="todo-container display-flex justify-content-center direction-column border-radius">
      <li v-for="todo in todoLists.todos" :key="todo.id">
        <base-card class="border-bottom li-todo border-radius align-items-center">
          <div class="display-flex align-items-center gap1">
            <base-button mode="circle"></base-button>
            <p>{{ todo.title }}</p>
          </div>
          <base-button @click="todoLists.deleteTodo(todo.id)">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
              <path
                fill="#494C6B"
                fill-rule="evenodd"
                d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
              />
            </svg>
          </base-button>
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
}

.li-todo {
  justify-content: space-between;
  gap: 1rem;
}

ul {
  list-style: none;
}
</style>
