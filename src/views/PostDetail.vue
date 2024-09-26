<template>
    <div>
      <h1>{{ post.title }}</h1>
      <p>{{ post.content }}</p>
      <h2>Comments</h2>
      <CommentComponent  class="comment-div"
        v-for="comment in comments" 
        :key="comment.id" 
        :comment="comment" 
        @commentClicked="handleCommentClick" 
      />
    </div>
    <div >
      <button  class="btn btn-primary btn-margin" @click="navigatetoAbout">Back to About</button>
      <router-link to="/" class="btn btn-primary">Back to Home</router-link>
    </div>

  </template>
  
  <script>
  import CommentComponent from '../components/comment.vue';
  
  export default {
    name: 'PostDetail',
    components: {
      CommentComponent
    },
    data() {
      return {
        post: {
          title: 'Loading...',
          content: ''
        },
        comments: [
          { id: 1, author: 'Alice', text: 'Great post!' },
          { id: 2, author: 'Bob', text: 'Thanks for sharing!' },
        ]
      };
    },
    mounted() {
      const postId = this.$route.params.id;
      const posts = [
        { id: 1, title: 'First Post', content: 'This is the first blog post.' },
        { id: 2, title: 'Second Post', content: 'This is the second blog post.' },
        { id: 3, title: 'Third Post', content: 'This is the third blog post.' }
      ];
      this.post = posts.find(post => post.id === Number(postId));
    },
    methods: {
      handleCommentClick(commentText) {
        alert(`Comment clicked: ${commentText}`);
      },
      navigatetoAbout(){
        this.$router.push({name:'About'})
        // this.$router.go(-1);
        // this.$router.replace({name:'About'})
      }
    }
  }
  </script>
  
  <style scoped>
  .comment-div{
    margin-bottom: 1rem;
  }
  .btn-margin{
    margin-right:1rem
  }
  </style>
  