<template>
  <div>
    <AddMeal />
    <MealList @edit-meal="editMeal" />
    <MealPlanner />
  </div>
</template>

<script>
import AddMeal from '../components/AddMeal.vue';
import MealList from '../components/MealList.vue';
import MealPlanner from '../components/MealPlanner.vue';

export default {
  components: {
    AddMeal,
    MealList,
    MealPlanner,
  },
  methods: {
    editMeal(meal) {
      this.$router.push({ name: 'EditMeal', params: { meal } });
    }
  }
};
</script>
