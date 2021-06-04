<template>
  <div class="row">
    <div class="col-md-8">
      <h3 class="pb-4 mb-4 fst-italic border-bottom">Feed</h3>
      <div id="posts">
        <post
          v-for="(post, i) in $store.state.model.posts"
          :key="post"
          v-bind:post="post"
          v-bind:i="i"
        />
      </div>
    </div>
    <div class="col-md-4">
      <div class="p-4">
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search by title"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>

        <h4 class="fst-italic">Title:</h4>
        <input
          v-model="title"
          class="form-control me-2"
          type="search"
          placeholder="title"
          id="title"
        />

        <h4 class="fst-italic">Text:</h4>
        <input
          v-model="text"
          class="form-control me-2"
          type="search"
          placeholder="text"
          id="text"
        />

        <button
          @click="createPost()"
          class="btn btn-outline-primary mt-3"
          id="new"
        >
          Create new post
        </button>
      </div>

      <div class="p-4">
        <h4 class="fst-italic">Contacts</h4>
        <ol class="list-unstyled">
          <li><a href="https://github.com/IlyaVoevodin/web1">GitHub</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Facebook</a></li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import post from "../components/post.vue";
export default {
  name: "Home",
  data() {
    return {
      title: "",
      text: "",
    };
  },
  components: {
    post,
  },
  created() {
    this.$store.commit("LOAD_DATA");
  },
  methods: {
    createPost() {
      this.$store.commit("ADD_POST", { title: this.title, text: this.text });
    },
  },
};
</script>
