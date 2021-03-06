import Vuex from 'vuex';
import axios from 'axios'
import cookie from 'js-cookie'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
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
      setToken(state, authData) {
        state.token = authData
      },
      clearToken(state) {
        state.token = null
      }
    },
    actions: {
      nuxtServerInit(VuexContext, context) {
        return axios.get(process.env.baseUrl + '/posts.json')
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
        return axios.post(process.env.baseUrl + '/posts.json?auth=' + VuexContext.state.token, createdPost)
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
      //  you have to add ?auth to end of .json in other to validate it
      editPost(VuexContext, editPost) {
        return axios.put(process.env.baseUrl + '/posts/' + editPost.id + '.json?auth=' + VuexContext.state.token, editPost)
          .then(res => {
            VuexContext.commit('editPost', editPost)
          })
          .catch(e => console.log(e))
      },

      authenticationUser(VuexContext, authData) {
        if (!authData.isLogin) {
          return axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + process.env.firebase_KEY, {
              email: authData.email,
              password: authData.password,
              returnSecureToken: true
            })
            .then(res => {
              VuexContext.commit('setToken', res.data.idToken);
              localStorage.setItem('token', res.data.idToken)
              VuexContext.dispatch('setLogoutTimer', res.data.expiresIn * 1000)
            })
        } else {
          return axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + process.env.firebase_KEY, {
              email: authData.email,
              password: authData.password,
              returnSecureToken: true
            })
            .then(res => {
              VuexContext.commit('setToken', res.data.idToken);
              localStorage.setItem('token', res.data.idToken);
              localStorage.setItem('tokenExpiration', new Date().getTime() + res.data.expiresIn * 1000)
              // cookie.set('jwt', token);
              cookie.set('tokenExpiration', new Date().getTime() + res.data.expiresIn * 1000)
              VuexContext.dispatch('setLogoutTimer', res.data.expiresIn * 1000)
            })
        }
      },
      setLogoutTimer(VuexContext, duration) {
        setTimeout(() => {
          VuexContext.commit('clearToken')
        }, duration)
      },

      initAuth(VuexContext) {
        const token = localStorage.getItem('token');
        const tokenExpiration = localStorage.getItem('tokenExpiration')

        if (new Date().getTime() > +tokenExpiration || !token) {
          return;
        }
        VuexContext.dispatch('setLogoutTimer', +tokenExpiration - new Date().getTime())
        VuexContext.commit('setToken', token)
      }



    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
      isAuthenticated(state) {
        return state.token != null
      }
    }
  });
};

export default createStore;
