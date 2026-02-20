import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTodoLists = defineStore('todo', () => {
  const todos = ref([
    {
      id: '00',
      title: 'Complete online Javascript course',
      isComplete: false,
    },
    {
      id: '01',
      title: 'Jog around the park 3x',
      isComplete: false,
    },
    {
      id: '02',
      title: '10 minutes meditation',
      isComplete: false,
    },
    {
      id: '03',
      title: 'Read for 1 hour',
      isComplete: false,
    },
    {
      id: '04',
      title: 'Pick up groceries',
      isComplete: false,
    },
    {
      id: '05',
      title: 'Complete Todo App on Frontend Mentor',
      isComplete: false,
    },
  ])

  return { todos }
})
