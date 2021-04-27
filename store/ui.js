
const state = {
  errors: null,
  deleteModal: false,
  createModal: false,
  loading: false,
  authorModal: false,
  snackbar : {
    active: false,
    text: '',
  },
};

const getters = {
    deleteModal(state) {
        return state.deleteModal;
    },
    authorModal(state) {
      return state.authorModal;
  },
    snackbar(state){
      return state.snackbar
    },
    createModal(state){
      return state.createModal
    },
    loading(state) {
        return state.loading;
    },
};

const actions = {
};

const mutations = {
  setLoading(state, payload) {
    state.loading = payload;
  },
  authorModal(state, payload) {
    state.authorModal = payload;
  },
  setDeleteModal(state, payload) {
    state.deleteModal = payload;
  },
  setCreateModal(state, payload) {
    state.createModal = payload;
  },
  setSnackbar(state , payload){
    state.snackbar = payload
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
