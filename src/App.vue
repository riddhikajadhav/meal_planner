<template>
  <div id="app">
    <header>
      <nav>
        <div class="logo">
          <router-link to="/">Meal Planner</router-link>
        </div>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/login">Login</router-link></li>
          <li><router-link to="/register">Register</router-link></li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <p>&copy; 2024 Meal Planner. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  background-color: #f4f4f9;
  color: #333;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #4CAF50;
  padding: 20px 40px;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav .logo a {
  font-size: 24px;
  font-weight: 700;
  color: white;
  text-decoration: none;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

nav ul li {
  font-size: 18px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  transition: color 0.3s, border-bottom 0.3s;
  padding: 5px 0;
}

nav ul li a:hover {
  color: #ddd;
  border-bottom: 2px solid #ddd;
}

main {
  flex: 1;
  padding: 40px 20px;
  background: linear-gradient(to right, #ffffff, #f4f4f9);
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px 0;
  margin-top: auto;
}
</style>
