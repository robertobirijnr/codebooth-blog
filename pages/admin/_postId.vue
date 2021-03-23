<template>
  <div class="admin-post-page">
    <section class="update-form">
      <admin-post-form :post="loadPost" />
    </section>
  </div>
</template>

<script>
import adminPostForm from "../../components/Admin/adminPostForm.vue";
export default {
  components: { adminPostForm },
  data() {
    return {
      loadPost: {
        author: "Robert Obiri Jnr",
        title: "Nuxt Js",
        content: "Super amazing framework for vue",
        thumbnailLink:
          "https://images.pexels.com/photos/693859/pexels-photo-693859.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
    };
  },
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>