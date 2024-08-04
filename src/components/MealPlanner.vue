<template>
  <div class="container">
    <h2>Meal Planner</h2>
    <div class="calendar">
      <div class="calendar-header">
        <div class="day" v-for="(day, index) in weekDays" :key="index">{{ day }}</div>
      </div>
      <div class="calendar-body">
        <div
          class="day-container"
          v-for="(day, index) in weekDays"
          :key="index"
          @drop="handleDrop(day)"
          @dragover.prevent
        >
          <h3 class="day-title">{{ day }}</h3>
          <div
            class="meal"
            v-for="meal in getMealsForDay(day)"
            :key="meal.id"
            draggable
            @dragstart="handleDragStart(meal)"
          >
            <div class="meal-content">
              <span class="meal-name">{{ meal.name }}</span>
              <span class="meal-calories">({{ meal.calories }} Cal)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weekDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      meals: [] 
    };
  },
  methods: {
    // Method to get meals for a specific day
    getMealsForDay(day) {
      return this.meals.filter(meal => this.formatDate(meal.date) === day);
    },

    // Method to handle the drag start event
    handleDragStart(meal) {
      event.dataTransfer.setData('meal', JSON.stringify(meal));
    },

    // Method to handle the drop event
    handleDrop(day) {
      const meal = JSON.parse(event.dataTransfer.getData('meal'));
      meal.date = this.formatDate(day);
      this.updateMeal(meal);
    },

    // Method to update meal in the store or state
    updateMeal(updatedMeal) {
      const mealIndex = this.meals.findIndex(meal => meal.id === updatedMeal.id);
      if (mealIndex !== -1) {
        this.$set(this.meals, mealIndex, updatedMeal);
        localStorage.setItem('meals', JSON.stringify(this.meals));
      }
    },

    // Helper method to format dates for comparison
    formatDate(date) {
      const options = { weekday: 'long' };
      return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
    }
  },
  created() {
    this.meals = JSON.parse(localStorage.getItem('meals')) || [];
  }
};
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
}

.calendar {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
}

.calendar-header {
  display: flex;
  background-color: #4CAF50;
  color: white;
  padding: 10px 0;
  font-weight: bold;
}

.day {
  flex: 1;
  text-align: center;
  padding: 5px;
}

.calendar-body {
  display: flex;
}

.day-container {
  flex: 1;
  border-right: 1px solid #ddd;
  padding: 10px;
  min-height: 300px;
  background-color: #f9f9f9;
  overflow-y: auto;
}

.day-container:last-child {
  border-right: none;
}

.day-title {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
}

.meal {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
  cursor: grab;
  transition: background-color 0.2s;
}

.meal-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.meal-name {
  font-weight: bold;
  color: #333;
}

.meal-calories {
  color: #666;
}

.meal:hover {
  background-color: #f0f0f0;
}
</style>
