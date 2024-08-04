import { createStore } from 'vuex';

export default createStore({
  state: {
    meals: []
  },
  getters: {
    getMeals: (state) => state.meals
  },
  mutations: {
    setMeals(state, meals) {
      state.meals = meals;
    },
    addMeal(state, meal) {
      state.meals.push(meal);
    },
    updateMeal(state, updatedMeal) {
      const index = state.meals.findIndex(meal => meal.id == updatedMeal.id);      
      if (index !== -1) {
        state.meals[index].name = updatedMeal.name;
      }
      localStorage.setItem('meals', JSON.stringify(state.meals));
    },
    deleteMeal(state, id) {
      state.meals = state.meals.filter(meal => meal.id !== id);
    }
  },
  actions: {
    register({ commit }, user) {
      commit('setUser', user);
    },
    login({ commit }, user) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('setUser', user);
          resolve();
        }, 1000);
      });
    },
    loadMeals({ commit }) {
      const meals = JSON.parse(localStorage.getItem('meals')) || [];
      commit('setMeals', meals);
    },
    addMeal({ commit, state }, meal) {
      commit('addMeal', meal);
      localStorage.setItem('meals', JSON.stringify(state.meals));
    },
    updateMeal({ commit }, updatedMeal) {
        commit('updateMeal', updatedMeal);
      },
    deleteMeal({ commit, state }, id) {
      commit('deleteMeal', id);
      localStorage.setItem('meals', JSON.stringify(state.meals));
    }
  }
});
