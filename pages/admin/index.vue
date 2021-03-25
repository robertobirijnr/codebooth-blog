<template>
  <div class="admin-page">
    <section class="new-post">
      <app-button @click="$router.push('/admin/new-post')"
        >Create Post</app-button
      >
    </section>
    <section class="existing-posts">
      <h1>All Posts</h1>
      <post-list :posts="loadPosts" isAdmin />
    </section>
  </div>
</template>

<script>
// import PostList from "@/components/Posts/postList.vue";
// import AppButton from "@/components/UI/AppButton.vue";
export default {
  // layout:'admin',
  middleware:'auth',
  components: {
   
  },
 computed:{
   loadPosts(){
     return this.$store.getters.loadedPosts
   }
 }
};
</script>

<style  scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>