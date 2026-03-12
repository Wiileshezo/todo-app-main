import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTodoLists = defineStore('todo', () => {
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

  function addNewTodo(newTodo) {
    if (!newTodo.trim()) return

    todos.value.unshift({
      id: Date.now(),
      title: newTodo.trim(),
      isComplete: false,
      isActive: false,
    })
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

  return {
    todos,
    addNewTodo,
    deleteTodo,
    toggleComplete,
  }
})
