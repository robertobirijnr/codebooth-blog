<template>
  <div class="home-page">
    <div class="intro">
      <h1>Get the latest tech news!</h1>
    </div>
    <post-list :posts="loadPosts" />
  </div>
</template>

<script>
import PostList from "../components/Posts/postList.vue";

export default {
  components: {
    PostList,
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

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-image: url("~assets/images/main-page-background.jpg");
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>
