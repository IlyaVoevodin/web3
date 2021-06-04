import { createStore } from "vuex";
import Model from "../model/model.js";
export default createStore({
  state: {
    model: new Model(),
  },
  mutations: {
    ADD_POST(state, { title, text }) {
      state.model.createPost(title, text);
    },
    REMOVE_POST(state, id) {
      state.model.removePost(id);
    },
    LOAD_DATA(state) {
      state.model.getPostsFromServer();
    },
  },
  actions: {},
  modules: {},
});
