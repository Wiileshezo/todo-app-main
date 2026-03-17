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
            <base-button
              mode="circle"
              @click="todoLists.toggleComplete(todo.id)"
              :class="{ active: todo.isComplete }"
            ></base-button>
            <p :class="{ completed: todo.isComplete }">
              {{ todo.title }}
            </p>
          </div>
          <base-button class="delete-btn" @click="todoLists.deleteTodo(todo.id)">
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
      <!-- <li></li> -->
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

ul {
  list-style: none;
}

.li-todo {
  justify-content: space-between;
  gap: 1rem;
}

.completed {
  text-decoration-line: line-through;
  color: var(--isComplete);
}
.active {
  background-image:
    url('@/images/icon-check.svg'),
    linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
  background-repeat: no-repeat;
  background-position: center;
}

.delete-btn {
  opacity: 1;
}

@media screen and (min-width: 770px) {
  .delete-btn {
    opacity: 0;
    transition: opacity 0.2s;
  }

  .li-todo:hover .delete-btn {
    opacity: 1;
  }
}
</style>
