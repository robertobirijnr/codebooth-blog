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
  components:{
    AdminPostForm
  }
 
};
</script>

<style lang="scss" scoped>
</style>