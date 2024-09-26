<template>
  <div>
    <PostList>
      <template v-slot:header>
        <h3>Latest Posts</h3>
      </template>
    </PostList>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue';

export default {
  name: 'HomeView',
  components: {
    PostList
  }
}
</script>

<style scoped>
h3{
  padding:1rem;
}
</style>

