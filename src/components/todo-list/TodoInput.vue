<script setup>
import { ref } from 'vue'
import { useTodoLists } from '@/stores/todoStore'

const newTodo = ref('')
const todoLists = useTodoLists()

function submitTodo() {
  todoLists.addNewTodo(newTodo.value)
  newTodo.value = ''
}
</script>

<template>
  <form @submit.prevent="submitTodo">
    <div class="input-card display-flex align-items-center justify-content-center direction-column">
      <base-card class="display-flex direction-row border-radius add-new-task">
        <base-button mode="circle" @click="submitTodo()"></base-button>
        <input
          type="text"
          placeholder="Create a new todo"
          class="text-input display-flex align-items-center"
          v-model="newTodo"
          @keyup.enter="submitTodo"
        />
      </base-card>
    </div>
  </form>
</template>

<style scoped>
.input-card {
  z-index: 999;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
input {
  font-family: 'Josefin Sans', sans-serif;
}

/* Placeholder styling */
input::placeholder {
  font-family: 'Josefin Sans', sans-serif;
  opacity: 1; /* sometimes needed */
}

.text-input {
  background: var(--card-bg);
  color: var(--text-color);
  border: none;
  outline: none;
  width: 70vw;
  box-sizing: border-box;
}

@media screen and (min-width: 768px) {
  .text-input {
    width: 50vw;
  }
}
@media screen and (min-width: 1024px) {
  .text-input {
    width: 38vw;
  }
}
</style>
