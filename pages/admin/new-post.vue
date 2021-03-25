<template>
  <div class="admin-post-page">
    <section class="new-post-form">
     <admin-post-form @submit="addNewPost"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from '../../components/Admin/adminPostForm.vue';

export default {
  middleware:'auth',
  // layout:'admin',
  components:{
    AdminPostForm
  },
  methods:{
    addNewPost(postData){
      this.$store.dispatch('addPost',postData)
      .then(()=>{
        this.$router.push('/admin');
      })
    }
  }
  
 
};
</script>

<style  scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>