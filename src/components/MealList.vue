<template>
  <div class="container">
    <h2>Meal List</h2>
    <input type="date" v-model="filterDate" @change="filterByDate" placeholder="Filter by Date" />
    <input type="text" v-model="searchTerm" @input="searchMeals" placeholder="Search by Name or Ingredient" />
    <ul>
      <li v-for="meal in filteredMeals" :key="meal.id">
        <div>
          <h3>{{ meal.name }}</h3>
          <p>{{ meal.ingredients }}</p>
          <p>{{ meal.calories }} Calories</p>
          <p>{{ meal.date }}</p>
          <button @click="editMeal(meal)" class="edit-button">Edit</button>
          <button @click="deleteMeal(meal.id)" class="delete-button">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterDate: '',
      searchTerm: '',
    };
  },
  computed: {
    filteredMeals() {
      let meals = this.$store.getters.getMeals;
      if (this.filterDate) {
        meals = meals.filter(meal => meal.date === this.filterDate);
      }
      if (this.searchTerm) {
        const term = this.searchTerm.toLowerCase();
        meals = meals.filter(meal =>
          meal.name.toLowerCase().includes(term) ||
          meal.ingredients.toLowerCase().includes(term)
        );
      }
      return meals;
    }
  },
  methods: {
    filterByDate() {
      // Logic to filter by date
    },
    searchMeals() {
      // Logic to search meals
    },
    editMeal(meal) {
      this.$router.push({ name: 'EditMeal', params: { id: meal.id } });
    },
    deleteMeal(id) {
      this.$store.dispatch('deleteMeal', id);
    }
  },
  created() {
    this.$store.dispatch('loadMeals');
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
}

input {
  margin: 10px 0;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

button {
  margin-right: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.edit-button {
  background-color: #4CAF50; /* Green */
  color: white;
}

.edit-button:hover {
  background-color: #45a049;
}

.delete-button {
  background-color: #f44336; /* Red */
  color: white;
}

.delete-button:hover {
  background-color: #e53935;
}
</style>
