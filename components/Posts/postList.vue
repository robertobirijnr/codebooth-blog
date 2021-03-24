<template>
    <section class="featured-posts">
      <post-preview
        v-for="post in posts" :key="post.id"
        :id="post.id"
        :thumbnail="post.thumbnail"
        :title="post.title"
        :previewText="post.postPreview"
        :is-admin="isAdmin"
      />
    </section>
</template>

<script>
import PostPreview from './postPreview.vue';
    export default {
        components:{
            PostPreview
        },
        props:{
          isAdmin:{
            type:Boolean,
            default:false
          },
          posts:{
            Type:Array,
            required: true
          }
        }
    }
</script>

<style  scoped>

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>