import Vuex from 'vuex';
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
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
