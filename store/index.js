import Vuex from 'vuex'

const createStore = ()=>{
    return new Vuex.Store({
        state:{
            loadPosts:[]
        },
        mutations:{
            setPosts(state, post){
                state.loadPosts = post
            }
        },
        actions:{
            getPosts({commit},post){
                commit('setPosts',post)
            }
        },
        getters:{
            loadPosts(state){
                return state.loadPosts
            }
        }
    })
}

export default createStore;
