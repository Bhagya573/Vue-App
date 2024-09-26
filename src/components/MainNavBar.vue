<template>
  <nav class="navbar">
    <h1>My Blog</h1>
    
    <!-- <BtnComp name="content"> -->
      <!-- <template  #header>
        <h1>header</h1>
      </template>
        
      <template #default><h1>default data</h1></template>
      <template v-slot:content>
          <h1>content</h1>
      </template>
      <template v-slot:footer>
          <h1>footer</h1>
        </template> -->
      <!-- <div>
       <h1>header</h1> 
      </div>
      <div>
       <h1>content</h1> 
      </div>
      <div>
       <h1>footer</h1> 
      </div> -->
      <!-- <i class="fas fa-coffee"></i> -->
    <!-- </BtnComp> -->
    <ul>
      <li>
        <router-link to="/"><i class="fas fa-home"></i>Home</router-link></li>
      <li><router-link to="/about"><i class="fas fa-info-circle"></i>About</router-link></li>
    </ul>
  </nav>
</template>

<script>
// import BtnComp from './btn-comp.vue';

export default {
  name: 'MainNavbar',
  // components:{
  //   BtnComp
  // },
  //need to remove
  mounted() {
    const link = document.createElement('link');
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }
  //
}
</script>

<style scoped>
.navbar {
  background-color: #333;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
i{
  margin-right:3px;
}
.navbar ul {
  list-style: none;
  display: flex;
  padding: 0;
}

.navbar li {
  margin: 0 10px;
}

.navbar a {
  color: white;
  text-decoration: none;
  font-size:1.3rem;
}

.navbar a:hover {
  text-decoration: underline;
}
</style>