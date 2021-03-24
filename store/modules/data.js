const state = () => ({
    loadedPosts: []
  });

  const mutations = {
    setPosts(state, posts){
      state.loadedPosts = posts;
    }
  };

  const actions = {
    nuxtServerInit({commit},context){
       return new Promise((resolve,reject)=>{
         setTimeout(()=>{
          commit('setPosts', [{

            id: "1",
            title: "JavaScript",
            postPreview: "You dont know javaScript",
            thumbnail: "https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          },
          {
            id: "2",
            title: "Vue Js",
            postPreview: "Road to become vue js developer",
            thumbnail: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          },
          {
            id: "3",
            title: "Nuxt js",
            postPreview: "This is awesome technology",
            thumbnail: "https://images.pexels.com/photos/1181267/pexels-photo-1181267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          },
          {
            id: "4",
            title: "Node js",
            postPreview: "Nodejs is a js runtime environment",
            thumbnail: "https://images.pexels.com/photos/693859/pexels-photo-693859.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          },
        ],)
          resolve();
         },1000)
       })
    },
    getPosts({commit}, posts){
      commit('setPosts', posts);
    }
  };

  const getters = {
    loadedPosts(state){
      return state.loadedPosts;
    }
  };

  export default {
    state,
    actions,
    getters,
    mutations
  };