<template>
    <div>
      <slot name="header"></slot> <!-- Slot for optional header -->
      <div class="post-div" v-if="posts">
        <Post v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </div>
  </template>

  <script>
  import Post from './Post.vue';
  
  export default {
    components: {
        Post
    },
    data() {
      return {
        posts: [
          { id: 1, title: 'First Post', content: 'This is the first blog post.' },
          { id: 2, title: 'Second Post', content: 'This is the second blog post.' },
          { id: 3, title: 'Third Post', content: 'This is the third blog post.' }
        ]
      };
    }
  }
  </script>
  
  <style scoped>
  .post-div{
    margin-left: 2rem;
    display: flex;
    gap: 2rem;
  }
  h2 {
    margin-bottom: 20px;
  }
  </style>
  