// Create a Store
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
  setPosts({commit}, posts) {
    commit("SET_POSTS", posts);
  }
}
