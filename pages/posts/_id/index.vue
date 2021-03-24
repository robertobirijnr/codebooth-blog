<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{loadPosts.title}}</h1>
      <div class="post-detail">
        <div class="post-detail">Last Updated on {{loadPosts.updatedDate}}</div>
        <div class="post-detail">Written by {{loadPosts.author}}</div>
      </div>
      <p class="post-content">{{loadPosts.postPreview}}</p>
    </section>
    <section class="post-feedback">
      <p>Let me know what you think about my article</p>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context) {
      console.log(context)
      return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve({
        loadPosts: {
            
            id: "2",
            author:'Bob Alaska',
            updatedDate:"02/02/21",
            title: "Vue Js",
            postPreview: "Road to become vue js developer",
            thumbnail:
              "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          
        },
      });
    }, 1000);
      }).then(data=>{
          return data
      })
      .catch(e=>{
          context.error(new Error())
      })
    
  },
};
</script>

<style  scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>