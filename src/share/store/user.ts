import { defineStore } from 'pinia'


export const useUserStore = defineStore('user', {
state: () => ({
name: '匿名',
token: ''
}),
actions: {
setToken(t: string) { this.token = t }
}
})
