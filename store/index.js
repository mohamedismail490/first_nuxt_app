// Create a Store
// import axios from "axios";

export const state = () => ({
  posts : {}
});

// Getters
export const getters = {
  posts(state) {
    return state.posts;
  }
};

// Mutations
export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts;
  }
};

// Actions
export const actions = {
  // async nuxtServerInit({commit}){
  //   await axios.get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => {
  //       commit("SET_POSTS", res.data ?? res);
  //     })
  //     .catch(() => {
  //       // return error({ statusCode: 404, message: 'No Posts Found!!!' })
  //     });
  // }
  setPosts({commit}, posts) {
    commit("SET_POSTS", posts);
  }
}
