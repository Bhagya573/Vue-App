<template>
    <div>
      <p><strong>{{ comment.author }}:</strong> {{ comment.text }}</p>
      <button @click="notifyParent" class="btn btn-secondary">Notify Parent</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CommentComponent',
    props: {
      comment: {
        type: Object,
        required: true
      }
    },
    methods: {
      notifyParent() {
        this.$emit('commentClicked', this.comment.text);
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
  