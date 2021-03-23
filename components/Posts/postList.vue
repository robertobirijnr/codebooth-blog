<template>
    <section class="featured-posts">
      <post-preview
        id="1"
        thumbnail="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="JavaScript"
        previewText="This is the fundamentals"
        :is-admin="isAdmin"
      />
      <post-preview
        id="2"
        thumbnail="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Vue js"
        previewText="This is a nice js framework"
        :is-admin="isAdmin"
      />
      <post-preview
        id="3"
        thumbnail="https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Nuxt js"
        previewText="This is going to be fun"
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