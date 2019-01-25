<template>
    <div class="panel">
        <div v-if="!isUserLogined">
            <sign-in-button v-on:userLogined="userLogin" class="btn"></sign-in-button>
            <sign-up-button v-on:userLogined="userLogin" class="btn"></sign-up-button>
        </div>
        <div v-if="isUserLogined">
            <p>Вы вошли, как <strong>{{ nameUser }}</strong></p>
            <log-out-button v-on:userLogout="userLogout"></log-out-button>
        </div>
    </div>
</template>

<script>
import ax from 'axios';
import store from '../store/index';
import SignInButton from './authComponents/signInButton';
import SignUpButton from './authComponents/signUpButton';
import LogOutButton from './authComponents/logOutButton';

export default {
  name: 'userBtn',
  components: { LogOutButton, SignUpButton, SignInButton },
  data() {
    return {
      isUserLogined: false,
      nameUser: '',
    };
  },
  methods: {
    userLogin() {
      this.isUserLogined = true;
      ax.get(`http://localhost:3000/users/${store.state.user}`)
        .then((r) => { this.nameUser = r.data.name; });
    },
    userLogout() {
      store.commit('USER_LOGOUT');
      this.isUserLogined = false;
    },
  },
};
</script>

<style scoped>
.btn {
    display: inline-block;
}
.panel {
    display: inline-block;
    margin-left: 30em;
}
</style>
