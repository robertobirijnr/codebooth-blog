<template>
  <div class="admin-post-page">
    <section class="update-form">
      <admin-post-form :post="loadedPost" @submit="updatePost" />
    </section>
  </div>
</template>

<script>
import axios from "axios";
import adminPostForm from "../../components/Admin/adminPostForm.vue";
export default {
  layout: "admin",
  middleware:'auth',
  components: { adminPostForm },
  asyncData(context) {
    return axios
      .get(
        "https://codebooth-4fece-default-rtdb.firebaseio.com/posts/" +
          context.params.postId +
          ".json"
      )
      .then((res) => {
        return {
          loadedPost: { ...res.data, id: context.params.postId },
        };
      })
      .catch((e) => context.error());
  },

  methods:{
    updatePost(editedPost){
      this.$store.dispatch('editPost',editedPost)
      .then(()=>{
        this.$router.push('/admin')
      })
    }
  }
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