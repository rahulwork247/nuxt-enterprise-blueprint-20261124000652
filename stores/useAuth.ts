import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(null)
  const role = ref<string>('guest')
  function login(jwt: string, userRole: string) {
    token.value = jwt
    role.value = userRole
  }
  function logout() {
    token.value = null
    role.value = 'guest'
  }
  return { token, role, login, logout }
})