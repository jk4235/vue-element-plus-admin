import { InjectionKey } from '@vue/runtime-core'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { State } from './type'

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0
  },
  mutations: {
    increment(state, payload: number) {
      state.count = state.count + payload
    },
    decrement(state, payload: number) {
      state.count = state.count - payload
    }
  },
  actions: {
    increment({ commit }, payload = 1) {
      commit('increment', payload)
    },
    decrement({ commit }, payload = 1) {
      commit('decrement', payload)
    }
  }
})

export function useStore() {
  return baseUseStore(key)
}
