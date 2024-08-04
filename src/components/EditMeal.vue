<template>
  <div class="container">
    <h2>Edit Meal</h2>
    <form @submit.prevent="submitEdit">
      <div class="form-group">
        <label for="meal-name">Meal Name</label>
        <input id="meal-name" type="text" v-model="localMeal.name" placeholder="Enter meal name" required />
      </div>
      <!-- Include hidden input for meal ID to ensure it is part of localMeal -->
      <input type="hidden" v-model="localMeal.id" />
      <button type="submit" class="submit-button">Save Changes</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ['meal'],
  data() {
    return {
      localMeal: { ...this.meal } // Create a local copy of the meal prop
    };
  },
  methods: {
    submitEdit() {
      console.log(this.$route.params.id)
       this.localMeal.id = this.$route.params.id;
      this.$store.dispatch('updateMeal', this.localMeal).then(() => {
        this.$router.push('/');
      }).catch(error => {
        console.error('Error updating meal:', error);
      });
    }
  },
  watch: {
    meal: {
      immediate: true,
      handler(newMeal) {
        this.localMeal = { ...newMeal };
      }
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
