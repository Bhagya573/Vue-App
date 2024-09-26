<template>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">{{ post.content }}</p>
        <router-link :to="{ name: 'PostDetail', params: { id: post.id } }" class="btn btn-primary">Read More</router-link>
      </div>
    </div>
  </template>
  
  <script>
// import PostDetail from '@/views/PostDetail.vue';

  export default {
    name: 'BlogPost',
    props: {
      post: {
        type: Object,
        required: true
      },
    }
  }
  </script>
  
  <style scoped>
  .card {
    width:25%;
    margin-bottom: 20px;
    margin-left: 2rem;
    display: flex;
    gap: 2rem;
  }
  </style>
  