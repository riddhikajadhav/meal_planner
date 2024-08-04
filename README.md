## Meal Planner Application

This is a Meal Planner application built with Vue.js and Vuex for state management. The application allows users to register, log in, add, edit, delete, and plan meals for each day of the week.

## Features

- User Registration and Login
- Add, Edit, and Delete Meals
- Plan Meals for Each Day of the Week
- Persistent State Management with Vuex
- Responsive and Professional UI

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/meal-planner.git
   cd meal-planner
2. **Install dependencies:**
   ## Using npm:
     npm install
   ## Or using Yarn:
    yarn install
3. **Run the application:**
 ## Using npm:
  npm run serve
##  Or using Yarn:
  yarn serve

## This will start the development server. Open your browser and navigate to http://localhost:8080.

## Project Structure
src/components: Contains all the Vue components such as AddMeal.vue, EditMeal.vue, MealList.vue, and MealPlanner.vue.
src/router: Contains the Vue Router configuration.
src/store: Contains the Vuex store configuration.
src/views: Contains the main views like Home.vue, Login.vue, and Register.vue.
src/App.vue: The root component.
src/main.js: The entry point of the application.
## Vuex Store
The Vuex store is used to manage the state of the application, including meals and user authentication. The state is persisted using localStorage.
## Actions
loadMeals: Loads meals from localStorage.
addMeal: Adds a new meal.
updateMeal: Updates an existing meal.
deleteMeal: Deletes a meal.
## Mutations
setMeals: Sets the meals state.
addMeal: Adds a meal to the state.
updateMeal: Updates a meal in the state.
deleteMeal: Deletes a meal from the state.
## Getters
getMeals: Returns the list of meals.
## Routes
The application uses Vue Router for navigation.

