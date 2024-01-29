import { defineStore } from "pinia"

export const useGlobal =  defineStore("global", {
  state: () => {
    return {
      isLoading: false
    }
  }
})
