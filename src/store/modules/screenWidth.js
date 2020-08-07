const state = {
  screenWidth: 0,
};

const getters = {
  getScreenWidth: state => state.screenWidth,
};

const mutations = {
  SET_SCREEN_WIDTH: (state, payload) => state.screenWidth = payload,
};

const actions = {
  setScreenWidth: (context, payload) => {
    context.commit('SET_SCREEN_WIDTH', payload);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
