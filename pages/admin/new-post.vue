<template>
  <div class="admin-post-page">
    <section class="new-post-form">
     <admin-post-form/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from '../../components/Admin/adminPostForm.vue';

export default {
  // layout:'admin',
  components:{
    AdminPostForm
  },
  
 
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