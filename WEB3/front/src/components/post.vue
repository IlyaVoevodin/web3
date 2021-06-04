<template>
  <article class="blog-post" id="${this.model.posts[i].id}">
    <h2 class="blog-post-title">{{ post.title }}</h2>
    <p class="blog-post-meta">
      January 1, 2014 by <a href="#">{{ post.author }}</a>
    </p>
    <hr />
    <p>{{ post.text }}</p>

    <button @click="deletePost()" class="btn btn-outline-warning delete">
      Delete
    </button>
  </article>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
    },
    i: {
      type: Number,
    },
  },
  methods: {
    deletePost() {
      this.$store.commit("REMOVE_POST", this.i);
    },
  },
};
</script>