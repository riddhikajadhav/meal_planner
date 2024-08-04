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
git clone https://github.com/your-username/meal-planner.git
cd meal-planner
2. **Install dependencies:**
Using npm: npm install
Or using Yarn: yarn install
4. **Run the application:**
Using npm: npm run serve
Or using Yarn: yarn serve

 This will start the development server. Open your browser and navigate to http://localhost:8080.
Vuex Store
The Vuex store is used to manage the state of the application, including meals and user authentication. The state is persisted using localStorage.
Actions
loadMeals: Loads meals from localStorage.
addMeal: Adds a new meal.
updateMeal: Updates an existing meal.
deleteMeal: Deletes a meal.
Mutations
setMeals: Sets the meals state.
addMeal: Adds a meal to the state.
updateMeal: Updates a meal in the state.
deleteMeal: Deletes a meal from the state.
Getters
getMeals: Returns the list of meals.
Routes
The application uses Vue Router for navigation.

