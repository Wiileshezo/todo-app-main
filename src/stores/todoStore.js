import { ref } from 'vue'
import { defineStore } from 'pinia'
import { computed } from 'vue'

export const useTodoLists = defineStore('todo', () => {
  // state
  const todos = ref([
    {
      id: '00',
      title: 'Complete online Javascript course',
      isComplete: false,
      isActive: false,
    },
    {
      id: '01',
      title: 'Jog around the park 3x',
      isComplete: false,
      isArchived: false,
    },
    {
      id: '02',
      title: '10 minutes meditation',
      isComplete: false,
      isActive: false,
    },
    {
      id: '03',
      title: 'Read for 1 hour',
      isComplete: false,
      isActive: false,
    },
    {
      id: '04',
      title: 'Pick up groceries',
      isComplete: false,
      isActive: false,
    },
    {
      id: '05',
      title: 'Complete Todo App on Frontend Mentor',
      isComplete: false,
      isActive: false,
    },
  ])
  const filter = ref('all') // all | active | completed

  // actions
  function addNewTodo(newTodo) {
    if (!newTodo.trim()) return

    todos.value.unshift({
      id: Date.now(),
      title: newTodo.trim(),
      isComplete: false,
      isActive: false,
    })

    setFilter('all')
  }

  function deleteTodo(id) {
    const deletedTodo = todos.value.findIndex((t) => t.id === id)
    if (deletedTodo !== -1) {
      todos.value.splice(deletedTodo, 1)
    }
  }

  function toggleComplete(id) {
    const completed = todos.value.find((t) => t.id === id)
    if (!completed) return

    completed.isComplete = !completed.isComplete
  }

  function activeTodos(todos) {
    let active = []
    todos.forEach((todo) => {
      if (!todo.isComplete) {
        active.push(todo)
      }
    })
    return active
  }

  function completeTodos(todos) {
    let complete = []
    todos.forEach((todo) => {
      if (todo.isComplete) {
        complete.push(todo)
      }
    })
    return complete
  }

  function clearCompleted() {
    todos.value = todos.value.filter((todo) => !todo.isComplete)
  }

  function setFilter(type) {
    filter.value = type
  }

  function moveTodo(draggedId, targetId, position) {
    const fromIndex = todos.value.findIndex((t) => t.id === draggedId)
    const toIndex = todos.value.findIndex((t) => t.id === targetId)

    const item = todos.value[fromIndex]

    todos.value.splice(fromIndex, 1)

    let newIndex = toIndex
    if (position === 'bottom') newIndex++

    todos.value.splice(newIndex, 0, item)
  }

  // computed
  const filteredTodos = computed(() => {
    if (filter.value === 'active') {
      return activeTodos(todos.value)
    }

    if (filter.value === 'completed') {
      return completeTodos(todos.value)
    }

    return todos.value
  })

  const isEmpty = computed(() => filteredTodos.value.length === 0)

  return {
    // state
    todos,
    filter,

    // actions
    addNewTodo,
    deleteTodo,
    toggleComplete,
    activeTodos,
    completeTodos,
    clearCompleted,
    setFilter,

    moveTodo,

    // computed
    filteredTodos,
    isEmpty,
  }
})
