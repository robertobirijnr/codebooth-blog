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
import PostList from "@/components/Posts/postList.vue";
import AppButton from "@/components/UI/AppButton.vue";
export default {
  // layout:'admin',
  components: {
    PostList,
    AppButton,
  },
  props:{
    posts:{
      type:Array,
      required:true
    }
  },
  asyncData(context, callback) {
    setTimeout(() => {
       callback(
        null,
        {
          loadPosts: [
            {
              id: "1",
              title: "JavaScript",
              postPreview: "You dont know javaScript",
              thumbnail:
                "https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            },
            {
              id: "2",
              title: "Vue Js",
              postPreview: "Road to become vue js developer",
              thumbnail:
                "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            },
            {
              id: "3",
              title: "Nuxt js",
              postPreview: "This is awesome technology",
              thumbnail:
                "https://images.pexels.com/photos/1181267/pexels-photo-1181267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            },
            {
              id: "4",
              title: "Node js",
              postPreview: "Nodejs is a js runtime environment",
              thumbnail:
                "https://images.pexels.com/photos/693859/pexels-photo-693859.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            }
          ]
        }
      );
    }, 1500);
  },
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