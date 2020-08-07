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
  async fetchCurrencies({commit}) {
    const res = await fetch('https://api.exchangeratesapi.io/latest?base=EUR')
      .then(res => res.json())
      .catch(_ => commit('SET_CURRENCIES', false));
    if (res) return commit('SET_CURRENCIES', {...res, rates: {...res.rates, 'EUR': 'BASE'}});
  },
};

export default {
  state,
  getters,
  mutations,
  actions
}