<script setup>
import { ref } from 'vue'
import { useTodoLists } from '@/stores/todoStore'

const todoLists = useTodoLists()

const draggedId = ref(null)
const hoverId = ref(null)
const dropPosition = ref(null)

// ---------- DESKTOP ----------
function dragStart(todo) {
  draggedId.value = todo.id
}

function dragOver(e, todo) {
  const rect = e.target.getBoundingClientRect()
  const offset = e.clientY - rect.top

  hoverId.value = todo.id
  dropPosition.value = offset > rect.height / 2 ? 'bottom' : 'top'
}

function dropItem(todo) {
  todoLists.moveTodo(draggedId.value, todo.id, dropPosition.value)

  resetDrag()
}

function resetDrag() {
  draggedId.value = null
  hoverId.value = null
  dropPosition.value = null
}

// ---------- MOBILE (TOUCH) ----------

function touchStart(todo) {
  draggedId.value = todo.id
}

function touchMove(e) {
  const touch = e.touches[0]
  const element = document.elementFromPoint(touch.clientX, touch.clientY)
  if (!element) return

  const li = element.closest('li[data-id]')
  if (!li) return

  hoverId.value = Number(li.dataset.id)

  const rect = li.getBoundingClientRect()
  const offset = touch.clientY - rect.top
  dropPosition.value = offset > rect.height / 2 ? 'bottom' : 'top'
}

function touchEnd() {
  if (draggedId.value && hoverId.value) {
    todoLists.moveTodo(draggedId.value, hoverId.value, dropPosition.value)
  }
  resetDrag()
}
</script>

<template>
  <div class="display-flex justify-content-center border-radius">
    <ul
      v-if="!todoLists.isEmpty"
      class="todo-container margin-top display-flex justify-content-center direction-column border-radius"
    >
      <li
        v-for="todo in todoLists.filteredTodos"
        :key="todo.id"
        draggable="true"
        @dragstart="dragStart(todo)"
        @dragover.prevent="dragOver($event, todo)"
        @drop="dropItem(todo)"
        @dragend="resetDrag"
        @touchstart="touchStart(todo)"
        @touchmove.prevent="touchMove"
        @touchend="touchEnd"
        :class="{ dragging: draggedId === todo.id }"
      >
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
    </ul>
    <base-card v-else class="no-item margin-top display-flex justify-content-center border-radius">
      <p>There is no item</p>
    </base-card>
  </div>
</template>

<style scoped>
.todo-container {
  background-color: var(--card-bg);
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
  z-index: 999;
}

.margin-top {
  margin-top: 1.5rem;
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

li.dragging {
  opacity: 0.8;
  transform: scale(1.05);
  cursor: grabbing;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}
p {
  font-size: calc(0.4rem + 6px);
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
.delete-btn svg {
  scale: 0.6;
}

.no-item {
  color: var(--Navy850);
}

@media screen and (min-width: 770px) {
  .delete-btn {
    opacity: 0;
    transition: opacity 0.2s;
  }

  .li-todo:hover .delete-btn {
    opacity: 1;
  }
  p {
    font-size: calc(0.5rem + 10px);
  }
}
</style>
