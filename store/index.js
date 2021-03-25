import Vuex from 'vuex';
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token:null
    },


    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, post) {
        state.loadedPosts.push(post)
      },
      editPost(state, editPost) {
        const postIndex = state.loadedPosts.findIndex(post => post.id === editPost.id)
        state.loadedPosts[postIndex] = editPost
      },
      setToken(state,authData){
        state.token = authData
      }
    },
    actions: {
      nuxtServerInit(VuexContext, context) {
        return axios.get(process.env.baseUrl+'/posts.json')
          .then(res => {
            //  commit requires array but we are getting objects so we need to convert
            const allPosts = [];
            for (const key in res.data) {
              allPosts.push({
                ...res.data[key],
                id: key
              })
            }
            VuexContext.commit('setPosts', allPosts)
          })
          .catch(e => context.error(e))
      },

      addPost(VuexContext, postData) {
        const createdPost = {
          ...postData,
          updatedDate: new Date()
        }
        return axios.post(process.env.baseUrl + '/posts.json', createdPost)
          .then(response => {
            VuexContext.commit('addPost', {
              ...createdPost,
              id: response.data.name
            })

          })
          .catch(err => {
            console.log(err)
          })
      },

      editPost(VuexContext, editPost) {
        return axios.put(process.env.baseUrl +'/posts/' + editPost.id + '.json', editPost)
          .then(res => {
            VuexContext.commit('editPost',editPost)
          })
          .catch(e => console.log(e))
      },

      authenticationUser(VuexContext,authData){
        if(!authData.isLogin){
        return axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + process.env.firebase_KEY,{
          email:authData.email,
          password:authData.password,
          returnSecureToken: true
        })
        .then(res=>{
          VuexContext.commit('setToken',res.data.idToken)
        })
       }else{
       return axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + process.env.firebase_KEY,{
           email:authData.email,
           password:authData.password,
           returnSecureToken:true
         })
         .then(res =>{
           VuexContext.commit('setToken',res.data.idToken)
         })
       }
      },

      getPosts({
        commit
      }, posts) {
        commit('setPosts', posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
