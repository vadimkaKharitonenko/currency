const state = {
  currencies: [],
};

const getters = {
  getRates: state => state.currencies.rates,
  getBase: state => state.currencies.base,
};

const mutations = {
  SET_CURRENCIES: (state, payload) => state.currencies = payload,
};

const actions = {
  fetchCurrency: async (context, payload) => {
    const res = await fetch(`https://api.exchangeratesapi.io/latest?base=${payload.currency}`)
      .then(res => res.json())
      .catch(_ => context.commit('SET_CURRENCIES', false));
    if (res) return context.commit('SET_CURRENCIES', {...res, rates: {...res.rates, [payload.currency]: 'BASE'}});
  },
};

export default {
  state,
  getters,
  mutations,
  actions
}
