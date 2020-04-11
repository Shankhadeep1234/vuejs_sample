<template>
  <div class="blogs">
    <h2>{{ blogTitle }}</h2>
    <input type="text" v-model="searchTerms" />
    <div v-for="post in filteredPosts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body | snippet }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Blogs",
  data() {
    return {
      blogTitle: "Blogs",
      posts: [],
      searchTerms: ""
    };
  },
  computed: {
    filteredPosts() {
      return this.posts.filter(post => {
        return post.title.match(this.searchTerms);
      });
    }
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        console.log(response.data);
        this.posts = response.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {}
};
</script>

<style></style>
