<script setup>
import { useTodoLists } from '@/stores/todoStore'
import { computed } from 'vue'
// import TodoList from './TodoList.vue'

const todoLists = useTodoLists()

const activeCount = computed(() => {
  let counter = 0

  todoLists.todos.forEach((todo) => {
    if (!todo.isComplete) counter++
  })

  return counter
})

const itemLeft = computed(() => (activeCount.value === 1 ? 'item left' : 'items left'))

// const activeTodos = computed(() => {
//   return todoLists.todos.value.filter((todo) => !todo.isComplete)
// })
</script>

<template>
  <div class="display-flex justify-content-center">
    <base-card class="filter-container display-flex border-radius">
      <p class="item-left">{{ activeCount }} {{ itemLeft }}</p>
      <div class="display-flex direction-row align-items-center desktop-middle-container">
        <base-button
          :class="{ activeBtn: todoLists.filter === 'all' }"
          @click="todoLists.setFilter('all')"
        >
          All
        </base-button>
        <base-button
          :class="{ activeBtn: todoLists.filter === 'active' }"
          @click="todoLists.setFilter('active')"
        >
          Active
        </base-button>
        <base-button
          :class="{ activeBtn: todoLists.filter === 'completed' }"
          @click="todoLists.setFilter('completed')"
          >Completed</base-button
        >
      </div>
      <base-button @click="todoLists.clearCompleted">Clear Completed</base-button>
    </base-card>
  </div>

  <div class="display-flex justify-content-center">
    <base-card
      class="mobile-middle-container display-flex direction-row align-items-center border-radius"
    >
      <div class="display-flex direction-row align-items-center">
        <base-button
          :class="{ activeBtn: todoLists.filter === 'all' }"
          @click="todoLists.setFilter('all')"
          >All</base-button
        >
        <base-button
          :class="{ activeBtn: todoLists.filter === 'active' }"
          @click="todoLists.setFilter('active')"
          >Active</base-button
        >
        <base-button
          :class="{ activeBtn: todoLists.filter === 'completed' }"
          @click="todoLists.setFilter('completed')"
          >Completed</base-button
        >
      </div>
    </base-card>
  </div>
</template>

<style scoped>
div {
  gap: 1rem;
}
.filter-container {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.26);
  justify-content: space-between;
}

.desktop-middle-container {
  display: none;
}
.mobile-middle-container {
  margin-top: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  justify-content: space-evenly;
  display: flex;
}
.item-left {
  color: var(--Navy850);
  font-size: 0.8rem;
}
.activeBtn {
  color: var(--Blue500);
}
@media (min-width: 768px) {
  .mobile-middle-container {
    display: none;
  }
  .desktop-middle-container {
    justify-content: space-between;
    display: flex;
  }
}
</style>
