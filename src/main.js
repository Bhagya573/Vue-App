import { createApp } from 'vue';
import App from './App.vue'; // Importing the root App component
import router from './router'
const app = createApp(App); // Creating the app instance
app.use(router);
app.mount('#app'); // Mount the app to the DOM
