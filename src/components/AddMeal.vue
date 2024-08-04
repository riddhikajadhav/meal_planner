<template>
  <div class="container">
    <h2>Add a New Meal</h2>
    <form @submit.prevent="submitMeal">
      <div class="form-group">
        <label for="meal-name">Meal Name</label>
        <input id="meal-name" type="text" v-model="meal.name" placeholder="Enter meal name" required />
      </div>
      <div class="form-group">
        <label for="ingredients">Ingredients</label>
        <input id="ingredients" type="text" v-model="meal.ingredients" placeholder="Enter ingredients" required />
      </div>
      <div class="form-group">
        <label for="calories">Calories</label>
        <input id="calories" type="number" v-model="meal.calories" placeholder="Enter calories" required />
      </div>
      <div class="form-group">
        <label for="date">Date</label>
        <input id="date" type="date" v-model="meal.date" required />
      </div>
      <button type="submit" class="submit-button">Add Meal</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      meal: {
        name: '',
        ingredients: '',
        calories: '',
        date: ''
      }
    };
  },
  methods: {
    submitMeal() {
      const meal = { ...this.meal, id: Date.now() };
      this.$store.dispatch('addMeal', meal);
      this.meal = { name: '', ingredients: '', calories: '', date: '' };
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
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

form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #555;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

input:focus {
  border-color: #4CAF50;
  outline: none;
}

.submit-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #45a049;
}
</style>
