<template>
  <div class="post-page">
    <PostList :posts="loadPosts" />
  </div>
</template>

<script>
import PostList from "../../components/Posts/postList.vue";

export default {
  components: {
    PostList,
  },
  
  computed:{
    loadPosts(){
      return this.$store.getters.loadedPosts
    }
  }
};
</script>

<style scoped>
.post-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>