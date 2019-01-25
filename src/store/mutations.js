export default {
  USER_REGISTRATION: (state, userId) => {
    state.user = userId;
  },
  USER_LOGOUT: (state) => {
    state.user = null;
  },
};
